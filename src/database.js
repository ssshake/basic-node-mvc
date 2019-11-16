const Sequelize = require('sequelize');
const config = require('./json/config.json');

const sequelize = new Sequelize(
    config.database.name, 
    config.database.user, 
    config.database.password, {
        host: config.database.host,
        dialect: 'mysql',
        operatorsAliases: false,
        logging: false
    }
); 

const database = {
    homepage: sequelize.define(
        'homepage', 
        {
            name: Sequelize.STRING,
            description: Sequelize.STRING,
        }
    ),
    direct: sequelize
}

sequelize.sync().then(function() {
    console.log("Database Synced")
})

module.exports = database;