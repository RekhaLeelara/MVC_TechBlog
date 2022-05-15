const router = require('express').Router();
const Post = require('../models/Post');


router.get('/dashboard', (req, res) => {
    if (req.session.loggedIn){
        Post.findAll({
            where: {
                postedBy: req.session.username
            }
          }).then(dbUserData => {
            // console.log("dashboardgetdbuserdata", dbUserData)
            const posts = dbUserData.map(post=>post.get({plain:true}));
            console.log("TRY TO RENDER DASHBOARD PAGE");
            res.render('dashboard', {posts});
          });
    }
    else{
        res.redirect('/login')
    }

});

router.get('/newpost', (req, res) => {
        res.render('newpost')


});



module.exports = router;