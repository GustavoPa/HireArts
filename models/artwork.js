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
            type: DataTypes.STRING, // what datatype being returned from azure ?
            allowNull: false
        },
        

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'artwork'
    }

)