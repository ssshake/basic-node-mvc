const handlebars = require('handlebars');
const handlebarsHelpers = require('handlebars-helpers');

const Index = require('./pages/index/template.js');

const views = {
    index: new Index(),
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