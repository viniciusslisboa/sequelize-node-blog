const db = require('./database')

const Post = db.sequelize.define('posts', {
    title: {
        type: db.Sequelize.STRING,
        required: true
    },
    content: {
        type: db.Sequelize.TEXT,
        required: true
    }
})


module.exports = Post