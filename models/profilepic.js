const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Artwork model
class Profilepic extends Model {}

// create associations
Profilepic.init(
    {
        artist_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        profilepic_id: {
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