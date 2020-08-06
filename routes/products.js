const express = require('express');
const router = express.Router();

//showing the products
router.get('/', (req, res) => {
  res.render('products');
})

module.exports = router;
