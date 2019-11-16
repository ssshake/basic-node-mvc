const express = require('express')
const app = express();
const listenPort = process.env.PORT || 8080

const controllers = require('./controllers.js');
const middleware = require('./middleware.js');
const routes = require('./json/routes.json');

const server = {
    middleware(){
        app.use(middleware.headers);
        app.use(
            (req, res, next) => next(), 
            express.static('public')
        );
    },
    routes(){
        routes.map((route) => {
            const { verb, path, controller } = route;
            app[verb](path, controllers[controller]);
        })
    },
    listener(){
        app.listen(
            listenPort, 
            () => console.log(`listening on port ${listenPort}!`)
        );
    }
}

server.middleware();
server.routes();
server.listener();