module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (req, rep) {
            rep('Hello from root!!!')
        }
    },
    {
        method: 'GET',
        path: '/hello',
        handler: function (req, rep) {
            rep('This is helloooo!!!')
        }

    }
]
