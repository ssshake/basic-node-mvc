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
    test: sequelize.define('test', {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
    }),
    sequelize
}

sequelize.sync().then(function() {
    console.log("DB SYNCED")
})

module.exports = database;