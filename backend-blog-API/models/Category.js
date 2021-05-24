module.exports = (sequelize, type) => {
    const Category = sequelize.define('category', {
        id: {
            type: type.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        }
    },{
        timestamps: false
    })
    
    
    return Category;
    };