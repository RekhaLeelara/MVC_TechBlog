const router = require('express').Router();
const User = require('../models/User');


router.get('/', (req, res) => {
  res.render('landingpage')
});



module.exports = router;