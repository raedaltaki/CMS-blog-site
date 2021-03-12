const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const sequelize = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

// handlebars
// const hbs = exphbs.create({});
app.engine('handlebars',exphbs({}));
app.set('view engine', 'handlebars');

// route
app.use(routes);

// turn on connection to db and server
sequelize.sync(
    { 
        force: false
    })
    .then(() => 
    {
        app.listen(PORT, () => console.log('Now listening'));
    });