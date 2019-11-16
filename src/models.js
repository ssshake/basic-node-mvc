const database = require('./database.js');

const models = {
    test: {
        read: () => {
            return [1,2,3,4,5,6];
            return database.test.findAll()
        },
        write: (name, description) => {
            return database.test.upsert({
                name, description
            })
            
        },
    }
}

module.exports = models;