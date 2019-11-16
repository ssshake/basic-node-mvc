const database = require('./database.js');

const models = {

    homepage: {
        read() {
            return { //because this is an example it should render something in the template no mater what
                numbers: [1,2,3,4,5,6],
                text: "Yes this works"
            };
            return database.homepage.findAll()
        },
        write(name, description) {
            return database.homepage.upsert({
                name, description
            })
            
        },
    }
}

module.exports = models;