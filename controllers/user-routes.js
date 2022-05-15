const router = require('express').Router();
const User = require('../models/User');


router.get('/user', (req, res) => {
res.render('signup')
});

// POST /api/users
router.post('/user', (req, res) => {
  console.log("******USER POSTED SUCCESSFULLY*****************", req.body);
  User.create({
    username: req.body.username,
    usertype: req.body.usertype,
    password: req.body.password
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.username = dbUserData.username;
      req.session.user_id = dbUserData.id;
      req.session.user_type = dbUserData.usertype;
      req.session.loggedIn = true;
      res.json(dbUserData);
    });
    // send user to login page now
    res.render('dashboard')
  });

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      console.log("Destroying user session");
      req.session.destroy(() => {
        res.status(204).end();
      });

    } else {
      res.status(404).end();
    }
  });

  router.get('/logout', (req, res) => {
    if (!req.session.loggedIn) {
      res.redirect('/login');
    }
  });


});

module.exports = router;