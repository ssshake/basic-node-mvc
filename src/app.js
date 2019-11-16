const server = require('./server.js');
server.middleware();
server.routes();
server.listen();