// import models
const Artist = require ('./artist');


// create associations
Artist.hasMany(Artwork, {
    foreignKey: 'artist_id'
})







module.exports = { Artist };
