const Sequelize = require('sequelize');
const PostModel = require('../models/Post')
const CategoryModel = require('../models/Category')
const HashtagModel = require('../models/Hashtag')


const sequelize = new Sequelize(process.env.MYSQL_URI)

const Post = PostModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);
const Hashtag = HashtagModel(sequelize, Sequelize);


Post.belongsToMany(Category, { through: 'PostsCategory' });
Category.belongsToMany(Post, { through: 'PostsCategory' });

Post.belongsToMany(Hashtag, { through: 'PostsHashtag' });
Hashtag.belongsToMany(Post, { through: 'PostsHashtag' });


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
    Category,
    Hashtag
}