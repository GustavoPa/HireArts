const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Artwork model
class Artwork extends Model {}

// create fields/columns
Artwork.init(
    {
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