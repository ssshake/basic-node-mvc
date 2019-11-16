const database = require('./database.js');

const models = {

    homepage: {
        read: () => {
            return [1,2,3,4,5,6];
            return database.homepage.findAll()
        },
        write: (name, description) => {
            return database.homepage.upsert({
                name, description
            })
            
        },
    }
    
}

module.exports = models;