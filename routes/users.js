const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('users page');
})

router.get('/login', (req, res) => {
  res.send(' Log in as  a user');
})
module.exports = router;
