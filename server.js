///// DEPENDENCIES /////
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const fs = require('fs');
const path = require('path');


// instantiate the server
const app = express();

// MIDDLEWARE for server to read POSTed data
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

const { artists } = require('./db/artist-seeds.json');

// 
const PORT = process.env.PORT || 3001;




// function filterByQuery(query, artistsArray) {
//     let filteredResults = artistsArray;
//     if (query.name) {
//       filteredResults = filteredResults.filter(artists => artists.name === query.name);
//     }
//     if (query.commissions) {
//       filteredResults = filteredResults.filter(artists => artists.commissions === query.commissions);
//     }
//     if (query.artisttype) {
//       filteredResults = filteredResults.filter(artists => artists.artisttype === query.artisttype);
//     }
//     return filteredResults;
// };

// function findById (id, artistsArray) {
//     const result = artistsArray.filter(artist => artist.id === id)[0];
//     return result;
// }

// function createNewArtist(body, artistsArray) {
//     const artist = body;
//     //add new artist to artists json & artistsArray 
//     // this creates a copy and will not visibly appear in artistseeds.json file!)
//     artistsArray.push(artist);
//     fs.writeFileSync(
//         path.join(__dirname, './db/artist-seeds.json'),
//     JSON.stringify({ artists: artistsArray }, null, 2)
//     );
//     return artist;
// }

// // validate artist for "required" info
// function validateArtist(artist) {
//     if (!artist.name || typeof artist.name !== 'string') {
//         return false;
//     }
//     if (!artist.username || typeof artist.username !== 'string') {
//         return false;
//     }
//     if (!artist.password || typeof artist.password !== 'string') {
//         return false;
//     }
//     if (!artist.email || typeof artist.email !== 'string') {
//         return false;
//     }
//     if (!artist.artisttype || typeof artist.artisttype !== 'string') {
//     return false;
//     }
//     // HOW TO VALIDATE FOR MINIMUM ONE SAMPLE PIC ADDED??? 
    
//     return true;
// }




// ///// ROUTES /////

// // find all artists
// app.get('/api/artists', (req, res) => {
//     let results = artists;
//     if (req.query) {
//         results = filterByQuery(req.query, results);
//     }
//     res.json(results);
// });

// //find artist by ID
// app.get('/api/artists/:id', (req, res) => {
//     const result = findById(req.params.id, artists);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// });


// // create new artist
// app.post('/api/artists', (req, res) => {
//     // set new indexed ID for new artist
//     req.body.id = artists.length.toString();

//     if (!validateArtist(req.body)) {
//         res.status(400).send("Please eneter all the required information.");
//     } else {
//         const animal = createNewArtist(req.body, artists);
//         res.json(artist)
//     }
// });






// tell server to listen for requests
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
  });