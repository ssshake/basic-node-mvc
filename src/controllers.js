const models = require('./models.js');
const views = require('./views.js');

const controllers = {
    
    async homepage(req, res) { 
        const data = await models.homepage.read();
        const html = await views.homepage.render(data);
        res.send(html);
    },
}

module.exports = controllers;