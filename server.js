// configuring DEPRNDENCIES
//configuring the express web app
const express = require('express');
//configuring middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
//const logger = require('morgan'):



// INSTANTIANTIONS
const app = express();
//configuring nodemon that will automatically resart the server

//configuring pug as a template engine in a views folder
app.set('views engine', 'pug');
app.set('views', './views');

// MIDDLEWARE
// To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// To parse json data
app.use(bodyParser.json());

app.use(cookieParser());

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
app.use(express.static('public'));

//ROUTES
app.get('/', (req, res) => {
  res.render('index');
})

// app.get("/register", (req, res) => {
//  res.sendFile('agentRegister.html', { root: path.join(__dirname, '../public') });
// });
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
