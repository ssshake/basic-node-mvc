const registerHandlebarsHelpers = require('./utilities/registerHandlebarsHelpers.js');
registerHandlebarsHelpers();

const Homepage = require('./views/homepage/template.js');

const views = {
    homepage: new Homepage(),
}

module.exports = views;