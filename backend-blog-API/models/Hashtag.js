module.exports = (sequelize, type) => {
    const Hashtag = sequelize.define('hashtag', {
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
    
    
    return Hashtag;
    };