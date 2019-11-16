const handlebars = require('handlebars');
const handlebarsHelpers = require('handlebars-helpers');

const registerHandlebarsHelpers = () => {
    handlebarsHelpers.math({
        handlebars: handlebars
    });
    
    handlebars.registerHelper('plusone', (value) => {
        return parseInt(value) + 1;
    });
}

module.exports = registerHandlebarsHelpers;