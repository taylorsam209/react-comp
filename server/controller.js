const axios = require('axios');

module.exports = {
    getBooks : (req, res) => {
        const db = req.app.get('db')

        db.get_all_books()
        .then(books => {
            res.status(200).send(books)
        })
        .catch(()=> res.status(500).send("Cannot get books"))
    },

    getBook: (req, res) => {
        const db = req.app.get('db')
        const id = req.params.id;

        db.get_book(id)
        .then(book => {
            res.status(200).send(book[0])
        })
        .catch(()=> res.status(500).send('Cannot Locate Book'))
    }
}