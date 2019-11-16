const express = require('express')
const app = express();
const listenPort = process.env.PORT || 8080

const controllers = require('./src/controllers.js');
const middleware = require('./src/middleware.js');
const routes = require('./json/routes.json');

app.use(middleware.headers);

app.use(
    (req, res, next) => next(), 
    express.static('public')
);

routes.map((route) => {
    const { verb, path, controller } = route;
    app[verb](path, controllers[controller]);
})

app.listen(
    listenPort, 
    () => console.log(`listening on port ${listenPort}!`)
);
