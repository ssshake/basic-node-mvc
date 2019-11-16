const registerHandlebarsHelpers = require('./utilities/registerHandlebarsHelpers.js');
registerHandlebarsHelpers();

const Homepage = require('./views/homepage/template.js');

const views = {
    homepage: new Homepage('./server.js'),
}

module.exports = views;