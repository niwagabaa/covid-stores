const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
const salesagent = mongoose.model('salesAgent');
// const Product = mongoose.model('Product');

router.get('/', (req, res) => {
  res.send('users page');
})

router.get('/login', (req, res) => {
  res.send(' Log in as  a user');
})


router.post('/', async(req, res) => {
try {
const addagent = new salesAgent(req.body);
console.log(req.body);
await addagent.save();
res.send('thanks for resgistering')
} catch (err) {
res.send('soomething went wromg');
console.log(err)
}
})

module.exports = router;
