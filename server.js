///// DEPENDENCIES /////
const express = require('express');

const { artists } = require('./db/artist-seeds.json');


// instantiate the server
const app = express();



app.get('/api/artists', (req, res) => {
    res.json(artists);
})






// tell server to listen for requests
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });