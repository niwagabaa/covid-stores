const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
  res.sendFile(__dir + '/managerDashboard.html');
});

// router.get('/login', (req, res) => {
//   res.send(' Log in page');
// })
module.exports = router;
