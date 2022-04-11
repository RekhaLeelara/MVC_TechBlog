const router = require('express').Router();
const User = require('../models/User');


router.get('/dashboard', (req, res) => {
  res.render('dashboard')
});



module.exports = router;