const routet = require('express').Router();
const sequelize = require('../config/connection');
const { Artist, Artwork, Profilepic } = require('../models');
const router = require('./api/artist-routes');

// get artist info & pics by ID
router.get('/:id', (req, res) => {
    Artist.findOne({
        attributes: { exclude: [ 'password' ]},
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Profilepic,
                attributes: ['artist_id', 'profilepic_id']
            },
            {
                model: Artwork,
                attributes: ['artist_id', 'artwork_id']
            }
        ]
    })
    .then(dbArtistData => {
        if (!dbArtistData) {
            res.status(404).json({ message: 'No artist found with this id.'});
            return;
        }
        res.json(dbArtistData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update artist info & pics
router.put('/:id', (req, res) => {
    Artist.update(req.body, {
        
    })
})

// delete account (DELETE /api/artists/id)
router.delete('/:id', (req, res) => {
    Artist.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbArtistData => {
        if (!dbArtistData) {
            res.status(404).json({ message: 'No artist found with this id.'});
            return;
        }
        res.json(dbArtistData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;