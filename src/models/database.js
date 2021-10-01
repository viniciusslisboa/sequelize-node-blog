// instance and config sequelize (mysql)
const Sequelize = require('sequelize')
const sequelize = new Sequelize('posts', 'root', 'md15', {
    host: "localhost",
    dialect: "mysql",
    timezone: '-03:00'
})



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}