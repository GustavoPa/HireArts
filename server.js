///// DEPENDENCIES /////
const express = require('express');

const { artists } = require('./db/artist-seeds.json');


// instantiate the server
const app = express();



app.get('/api/artists', (req, res) => {
    let results = artists;
    console.log(req.query)
    res.json(results);
})






// tell server to listen for requests
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });