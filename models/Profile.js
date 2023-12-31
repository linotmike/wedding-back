const {Model,DataTypes}= require('sequelize')
const sequelize = require('../config/connection')

class Profile extends Model{}

Profile.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
    
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }

},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile'
})
module.exports = Profile;
