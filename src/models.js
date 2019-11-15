const database = require('./database.js');
const _ = require('lodash');

const models = {
    test: {
        read: () => {
            database.test.findAll()
        },
        write: (name, description) => {
            return database.test.upsert({
                name, description
            })
            
        },
    }
}

module.exports = models;