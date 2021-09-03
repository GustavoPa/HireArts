///// DEPENDENCIES /////
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');


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




function filterByQuery(query, artistsArray) {
    let filteredResults = artistsArray;
    if (query.name) {
      filteredResults = filteredResults.filter(artists => artists.name === query.name);
    }
    if (query.commissions) {
      filteredResults = filteredResults.filter(artists => artists.commissions === query.commissions);
    }
    if (query.artisttype) {
      filteredResults = filteredResults.filter(artists => artists.artisttype === query.artisttype);
    }
    return filteredResults;
};

function findById(id, artistsArray) {
    const result = artistsArray.filter(artists => artists.id === id)[0];
    return result;
  }


app.get('/api/artists', (req, res) => {
    let results = artists;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.get('api/artists/:id', (req, res) => {
    const result = findById(req.params.id, artists);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// app.post('/api/artists', (req, res) => {
//     // req.body is where our incoming content will be
//     console.log(req.body);
//     res.json(req.body);
//   });






// tell server to listen for requests
app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
  });