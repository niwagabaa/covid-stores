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

//app.set('views', __dirname + '/views');

// MIDDLEWARE
//requiring mongose and connecting to db

//requiring mongose and connecting to db
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







//connect to mongoose
// const dbPath = 'mongodb://localhost/firstrest';
// const options = {useNewUrlParser: true, useUnifiedTopology: true}
// const mongo = mongoose.connect(dbPath, options);
// mongo.then(() => {
//     console.log('connected');
// }, error => {
//     console.log(error, 'error');
// })

// // session middleware
// app.use(
//   session({
//     secret: 'arbitary-string'
//     resave: false,
//     saveUninitialised: true,
//     cookie: { secure: true }
//   })
// );
//
// app.use(logger('common'));

//middleware for static files



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


// app.get("/register", (req, res) => {
// res.sendFile('agentRegister.html', { root: path.join(__dirname, '../public') });
//  });
//
// app.post('/register', (req, res) => {
//   console.log(req.body);
//   res.sendFile('agentRegister.html', { root: path.join(__dirname, '../public') });
// })
// //routing pages that dont exist on the application
// app.get('*', (req, res) => {
//   res.send('Error. This page doesnt exist on this planet');
//})

//routing to the files in the controller

// BOOTSTRAPPING THE SERVER
// Making the clients listen to port 4000
app.listen (4000, ()=> console.log("The application is running on port 4000"));
