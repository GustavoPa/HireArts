///// DEPENDENCIES /////
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
 const path = require("path");

// instantiate the server
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('home');
});

// const { artists } = require('./db/artist-seeds.json');

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
//   }


// app.get('/api/artists', (req, res) => {
//     let results = artists;
//     if (req.query) {
//         results = filterByQuery(req.query, results);
//     }
//     res.json(results);
// });

const routes = require("./controllers");
app.use("/", routes);


// tell server to listen for requests
app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}!`);
  });

