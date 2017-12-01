const axios = require('axios');

module.exports = {
    getBooks : (req, res) => {
        const db = req.app.get('db')

        db.get_all_books()
        .then(books => {
            res.status(200).send(books)
        })
        .catch(()=> res.status(500).send("Cannot get books"))
    }
}