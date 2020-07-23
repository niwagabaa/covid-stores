//configuring the express web app
const express = require('express');
const app = express();
//configuring nodemon that will automatically resart the server
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

//routing pages that dont exist on the application
app.get('*', (req, res) => {
  res.send('Error. This page doesnt exist on this planet');
})

//routing to the files in the controller

// Making the clients listen to port 4000
app.listen (4000, ()=> console.log("The application is running on port 4000"));
