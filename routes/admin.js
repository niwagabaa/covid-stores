const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const salesAgent = mongoose.model('salesAgent');

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/mdashboard', (req, res) => {
  res.render('managerDashboard', { title: 'Dashboard| Agent' });
});


router.post('/', async(req, res) =>{
  try {
    const addagent = new salesAgent(req.body);
    console.log(req.body);
    await addagent.save();
    res.send('You have registered a new Sales Agent')
  } catch (err) {
    res.send('Sorry, we were not able to register the agent');
    console.log(err);
  }
})

// router.get('/login', (req, res) => {
//   res.send(' Log in page');
// })
module.exports = router;
