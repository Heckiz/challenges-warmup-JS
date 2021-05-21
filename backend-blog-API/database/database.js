const Sequelize = require('sequelize');
const PostModel = require('../models/Post')

const sequelize = new Sequelize(process.env.MYSQL_URI)

const Post = PostModel(sequelize, Sequelize);

(async function sync() {
    try {
        await sequelize.sync({force:false});
        console.log("Models synced successfully");
    } catch (error) {
        console.log("Models not sync | ERROR |", error);
    }
})()

module.exports = {
    Post
}