const router = require('express').Router();
const Post = require('../models/Post');


router.post('/createpost', (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    postedBy: req.session.username
    // date: new date()
  }).then(dbUserData => {

    console.log("newpostdbuserdata", dbUserData);
    const updatedData = dbUserData.get({ plain: true });
    res.render('dashboard', { updatedData });
    // res.render('dashboard');

  });
});

router.get('/editpost/:id', (req, res) => {
  Post.findByPk(req.params.id)
    .then(dbUserData => {
      // const posts = dbUserData.map(post=>post.get({plain:true}));
      console.log("newpostdbuserdata", dbUserData);
      // res.redirect('/editpost', {dbUserData});
      if (dbUserData === null) {
        return
      }
      const updatedData = dbUserData.get({ plain: true });
      res.render('editpost', { updatedData });
    });
});

// router.get('/editpost', (req, res) => {
//   res.render('editpost', req.body.dbUserData)
// })

router.post('/updatepost/:id', (req, res) => {
  Post.update(req.body,{
    where: {
      id: req.params.id
    }
  }).then(dbUserData => {

    console.log("updatedbuserdata", dbUserData);
    res.redirect('dashboard');

  });
});

router.delete('/deletePostpage/:id', (req, res) => {
  console.log('id', req.params.id);
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;