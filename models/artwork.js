const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Artwork model
class Artwork extends Model {}

// create fields/columns
Artwork.init(
    {
        id: {
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
        work_samples: {
            type: DataTypes.STRING, 
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

module.exports = Artwork;