// configuring DEPRNDENCIES
//configuring the express web app
const express = require('express');
const app = express();
//configuring middleware

//require('dotenv/config')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// To parse json data
app.use(bodyParser.json());

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const mongoose = require('mongoose');
//const logger = require('morgan'):

const url = 'mongodb://localhost:27017/covidstore';
const path = require('path');

app.use(express.static('public'));

//configuring pug as a template engine in a views folder
app.set('view engine', 'pug');
app.set('views', './views');


//requiring mongoose and connecting to db
mongoose.connect(url, {
useNewUrlParser: true,
useUnifiedTopology: true
});
mongoose.connection.on('open', () => {
console.log('Mongoose connection open');
})
.on('error', (err) => {
console.log(`Connection error: ${err.message}`);
});


//ROUTES
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/index', (req, res) => {
  res.render('index');
})
const admin = require('./routes/admin');

app.use('/admin', admin)

const agent = require('./routes/agent');

app.use('/agent', agent);


const users = require('./routes/users');

app.use('/users', users);

const products = require('./routes/products')
app.use('/products', products);

// These are the linked pages in development mode
app.get('/nav', (req, res) => {
  res.sendFile(__dirname + "/views/layouts.html")
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname + "/views/managerlogin.html")
})

app.get('*', (req, res) => {
res.send('Error. This page doesnt exist on this planet');
})
// BOOTSTRAPPING THE SERVER
app.listen (4000, ()=> console.log("The application is running on port 4000"));
