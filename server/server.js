require("dotenv").config();
const express = require("express"),
    session = require("express-session"),
    bodyParser = require("body-parser"),
    massive = require("massive"),
    passport = require("passport"),
    Auth0Strategy = require("passport-auth0"),
    cors = require("cors"),
    cc = require('./controller')

    const PORT = 3010;
    const app = express();

    app.use(bodyParser.json());
    app.use(cors());
    
    app.use(
        session({
            secret: process.env.SECRET,
            resave: false,
            saveUninitialized: true
        })
    );
    
    app.use(passport.initialize());
    app.use(passport.session());
    
    massive(process.env.CONNECTION_STRING).then(db => {
        app.set('db', db);
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
        console.log('Massive is running/connected to DB.')
    })
    
    passport.use(new Auth0Strategy({
        domain: process.env.AUTH_DOMAIN,
        clientID: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL
    }, function (accessToken, refreshToken, extraParams, profile, done) {
        const db = app.get('db'); 
        db.auth.find_user([profile.identities[0].user_id]).then(user => {
            if (user[0]) {
                return done(null, user[0].user_id)
            } else {
                const user = profile._json;
                db.auth.create_user([user.name, user.email, user.picture, user.identities[0].user_id])
                    .then(user => {
                        return done(null, user[0].user_id)
                    })
            }
        })
    }));
    
    app.get('/auth', passport.authenticate('auth0'));
    app.get('/auth/callback', passport.authenticate('auth0', {
        successRedirect: process.env.SUCCESS_REDIRECT,
        failureRedirect: process.env.FAILURE_REDIRECT
    }));
    
    app.get('/auth/me', (req, res) => {
        if (!req.user) {
            return res.status(200).send(false)
        }
        return res.status(200).send(req.user);
    })
    
    app.get('/auth/logout', (req, res) => {
        req.logOut();
        res.redirect(302, process.env.LOGOUT_REDIRECT)
    })
    
    passport.serializeUser(function (id, done) {
        done(null, id);
    });
    
    passport.deserializeUser(function (id, done) {
        const db = app.get('db');
        db.auth.find_current_user([id])
            .then(user => {
                done(null, user);
                // console.log('This is USER[0]', user[0]);
            })
    })
    
    app.get('/api/books', cc.getBooks)
    app.get('/api/book/:id', cc.getBook)
    
    
    