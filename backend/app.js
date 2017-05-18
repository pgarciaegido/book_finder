const Hapi = require('hapi')
const server = new Hapi.Server()

const routes = require('./routes/routes')

server.connection({ port: 8080, host: 'localhost' })

server.start((err) => {
    if (err) throw err;
    
    console.log(`Server running at: ${server.info.uri}`)
})

// Mapping throu array of routes, and setting them.
routes.map((route) => {
    server.route(route)
})

