const models = require('./models.js');
const views = require('./views.js');

const indexPageController = require('./controllers/indexPage.js');

const controller = {
    indexPage: async (req, res) => { 
        const data = await indexPageController();
        const html = await views.index.render(data);
        res.send(html);
    },
    testPage: async (req, res) => { 
        const data = { somethingInlined: 'hi' }
        const html = await views.index.render(data);
        res.send(html);
    }, 
    anotherTestPage: async (req, res) => { 
        const data = await models.test.read();
        const html = await views.index.render(data);
        res.send(html);
    },
    errorPage: async (req, res) => {
        const data = {
            errorStatus: req.query.errorstatus,
            errorText: req.query.errortext,
        };
        const html = await views.error.render(data);
        res.send(html);
    },
}

module.exports = controller;