const router = require('express').Router();
const Post = require('../models/Post');


router.get('/home', (req, res) => {
    // if (req.session.loggedIn){
        Post.findAll({

          }).then(dbUserData => {
            const posts = dbUserData.map(post=>post.get({plain:true}));
            res.render('home', {posts});
          });
    // }
    // else{
    //     res.redirect('/login')
    // }

});



module.exports = router;