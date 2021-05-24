module.exports = (sequelize, type) => {
const Post = sequelize.define('post', {
    id: {
        type: type.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: type.STRING,
        allowNull: false
    },
    content: {
        type: type.STRING,
        allowNull: false
    },
    imageUrl:{
        type: type.STRING,
        allowNull: false
    }
},{
    timestamps: true
})


return Post;
};