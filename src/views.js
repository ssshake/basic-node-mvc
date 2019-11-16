const handlebars = require('handlebars');
const handlebarsHelpers = require('handlebars-helpers');

const Homepage = require('./views/homepage/template.js');

const views = {

    homepage: new Homepage(),

}

const registerHandlebarsHelpers = () => {
    handlebarsHelpers.math({
        handlebars: handlebars
    });
    
    handlebars.registerHelper('plusone', (value) => {
        return parseInt(value) + 1;
    });
}

registerHandlebarsHelpers();

module.exports = views;