const express = require('express')
const app = express();
const listenPort = process.env.PORT || 8080

const controller = require('./src/controller.js');
const middleware = require('./src/middleware.js');

app.use(middleware.headers);
app.use(
    (req, res, next) => { next() }, 
    express.static('public')
);

app.get('/anothertest'  , controller.anotherTestPage);
app.get('/test'         , controller.testPage);
app.get('/'             , controller.indexPage);

app.listen(
    listenPort, 
    () => console.log(`listening on port ${listenPort}!`)
);
