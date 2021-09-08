///// DEPENDENCIES /////
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
const controllers = require('./controllers')

const fs = require('fs');
const path = require('path');



// instantiate the server
const app = express();
const PORT = process.env.PORT || 3001;


// MIDDLEWARE for server to read POSTed data
//parse incoming JSON data
app.use(express.json());

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));


app.use(controllers);



app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('home');
});

// const { artists } = require('./db/artist-seeds.json');


// const PORT = process.env.PORT || 3001;

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function (req, res) {
//     res.render('home');
// });


// const { artists } = require('./db/artist-seeds.json');





// connect to database and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });


