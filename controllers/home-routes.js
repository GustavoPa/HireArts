const router = require('express').Router();
const { json } = require('sequelize/types');
const sequelize = require('../config/connection');
const { Artist, Artwork, Profilepic } = require ('../models');


// find all artists to display on main page
router.get('/', (req, res) => {
    Artist.findAll({
        attributes: [
            // ...
        ],
        include: [
            {
                model: Artwork,
                attributes: ['']
            },
            {
                model: Profilepic,
                attributes: ['']
            }
        ]
    })
    .then(dbArtistData => {
        const artists = dbArtistData.map(artist => artist.get({ plain: true }));

        res.render ('main', {
            // ...
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

