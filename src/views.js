const handlebars = require('handlebars');
const handlebarsHelpers = require('handlebars-helpers');


const ErrorPage = require('./pages/error/index.js');
const Index = require('./pages/index/index.js');
const Test = require('./pages/test/index.js');
const AnotherTest = require('./pages/anothertest/index.js');

const views = {
    anothertest:  new AnotherTest(),
    test:        new Test(),
    error:      new ErrorPage(),
    index:      new Index(),
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