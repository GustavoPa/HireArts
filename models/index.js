// import models
const Artist = require ('./artist');
const Artwork = require ('./artwork');
const Profilepic = require('./profilepic');


// create associations
Artist.hasMany(Artwork, {
    foreignKey: 'artist_id'
});

Artwork.belongsTo(Artist, {
    foreignKey: 'artist_id'
})

Profilepic.belongsTo(Artist, {
    foreignKey: 'artist_id'
});











module.exports = { Artist, Artwork, Profilepic };
