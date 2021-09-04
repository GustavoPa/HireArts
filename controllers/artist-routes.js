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
        website: req.body.website,
        artwork_id: req.body.artwork_id,
        profilepic_id: req.body.profilepic_id,
        location_id: req.body.location_id
    })
    then(dbArtistData => res.status(200).json(dbArtistData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// PUT /api/artists/1
// router.put('/:id', (req, res) => {});

// DELETE /api/artists/1
router.delete('/:id', (req, res) => {
    User.destroy({
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