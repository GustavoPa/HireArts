const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the Artist model
class Artist extends Model {}

// define table columns and configuration
Artist.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [4]
            }
        },
        location: {
            type: DataTypes.INTEGER,
            autoIncrement: false,
            allowNull: true,
        },
        artist_type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        work_samples: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profile_pic: {
            type: DataTypes.STRING,
            allowNull: true
        },
        opento_commission: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }

    },
    {
        // TABLE CONFIGURATIONS

        // pass in imported sequelize connection (direct connection to the database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `artist_id` and not `artistId`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'artist'
    }
);

module.exports = Artist;