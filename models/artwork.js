const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Artwork model
class Artwork extends Model {}

// create fields/columns
Artwork.init(
    {
        artist_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        artwork_id: {
            type: DataTypes.STRING, // need to confirm this is the correct datatype
            allowNull: false
        },
        artwork_count: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'artwork'
    }

)