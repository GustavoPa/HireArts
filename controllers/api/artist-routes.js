const router = require('express').Router();
const { Artist } = require('../../models/artist');

// find all artists (GET api/artists)
router.get('/', (req, res) => {
    // access the Artist model and run findAll() method
    Artist.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbArtistData => res.json(dbArtistData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    });
});

// find artist by ID (GET api/artists/1)
router.get('/:id', (req, res) => {
    Artist.findOne({
        attributes: { exclude: [ 'password' ]},
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

// create new artist (POST /api/artists)
router.post('/', (req, res) => {
    Artist.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
        artist_type: req.body.artist_type,
        website: req.body.website,
        description: req.body.description,
        work_samples: req.body.work_samples,
        profile_pic: req.body.profile_pic,
        opento_commission: req.body.opento_commission   
    })
    .then(dbArtistData => res.status(200).json(dbArtistData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});







module.exports = router;