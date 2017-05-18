const books = require('../controllers/books')

module.exports = [
    {
        method: 'GET',
        path: '/api/books',
        handler: books.getAllBooks
    },
    {
        method: 'GET',
        path: '/api/books/{name}',
        handler: books.getBookByName
    }
    // {
    //     method: 'POST',
    //     path: '/api/books',
    //     handler: postBook
    // }
]
