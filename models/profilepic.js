const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Artwork model
class Profilepic extends Model {}

// create associations
Profilepic.init(
    {
        id:  {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        artist_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        profile_pic: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'artwork'
    }
)

module.exports = Profilepic;