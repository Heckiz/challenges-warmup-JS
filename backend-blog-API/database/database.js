const Sequelize = require('sequelize');
const PostModel = require('../models/Post')
const CategoryModel = require('../models/Category')

const sequelize = new Sequelize(process.env.MYSQL_URI)

const Post = PostModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);

Post.belongsToMany(Category, { through: 'PostsCategory' });
Category.belongsToMany(Post, { through: 'PostsCategory' });

(async function sync() {
    try {
        await sequelize.sync({force:false});
        console.log("Models synced successfully");
    } catch (error) {
        console.log("Models not sync | ERROR |", error);
    }
})()

module.exports = {
    Post,
    Category
}