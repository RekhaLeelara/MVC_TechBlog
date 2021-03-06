const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//Render all posts in the home page
router.get('/', (req, res) => {
        Post.findAll({

          }).then(dbUserData => {
            const posts = dbUserData.map(post=>post.get({plain:true}));
            res.render('home', {posts, loggedIn: req.session.loggedIn});
          });
});

//Render login page
router.get('/login', (req, res) => {
  res.render('login')
});

//Allowing the user to login if the credential is valid
router.post('/login', (req, res) => {
    User.findOne({
      where: {
        username: req.body.username
      }
    }).then(dbUserData => {

      if (!dbUserData) {
        res.status(400).json({ message: 'No user with that username!' });
        return;
      }
  
      const validPassword = dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
  
      req.session.save(() => {
        console.log("Enter storing session")
        // declare session variables
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        console.log("req.session.username", req.session.username);
        req.session.usertype = dbUserData.usertype;
        req.session.github = dbUserData.github;
        req.session.loggedIn = true;
        console.log("Exit storing session")
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

module.exports = router;