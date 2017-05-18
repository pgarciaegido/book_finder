const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/books_finder'

module.exports = {
    getAllBooks,
    getBookByName,
    postBook
}

function getAllBooks(request, reply) {
    MongoClient.connect(url, (err, db) => {
        let booksCol = db.collection('books')
        booksCol.find({}).toArray((err, res) => {
            reply(res)
        })
    })
}

function getBookByName(request, reply) {
    let name = request.params.name

    MongoClient.connect(url, (err, db) => {
        let booksCol = db.collection('books')
        booksCol.find({name}).toArray((err, res) => {
            reply(res)
        })
    })
}

function postBook(request, reply) {

}