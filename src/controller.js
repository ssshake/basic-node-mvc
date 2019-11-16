const models = require('./models.js');
const views = require('./views.js');

const controller = {
    indexPage: async (req, res) => { 
        const data = { 
            test: await models.test.read() 
        };
        const html = await views.index.render(data);
        res.send(html);
    },
}

module.exports = controller;