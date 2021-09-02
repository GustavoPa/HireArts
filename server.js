///// DEPENDENCIES /////
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');


var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

const { artists } = require('./db/artist-seeds.json');

// 
const PORT = process.env.PORT || 3001;

// instantiate the server
const app = express();


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
//   }


// app.get('/api/artists', (req, res) => {
//     let results = artists;
//     if (req.query) {
//         results = filterByQuery(req.query, results);
//     }
//     res.json(results);
// });






// tell server to listen for requests
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
  });