const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/adashboard', (req, res) => {
  res.render('agentDashboard', { title: 'Dashboard| Agent' });
});

module.exports = router;
