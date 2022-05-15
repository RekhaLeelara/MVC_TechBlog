const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

//get the post based on the id
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'id',
        'postId',
        'body',
        'createdAt'
      ],
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//Post a new comment
router.post('/', (req, res) => {
  if (req.session){
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
      }
});

//Get list of comments for a specific post id
router.get('/comment/:postId', (req, res) => {
  console.log('-------------------------------', req.params.postId);
  Post.findByPk(req.params.postId, {
    include: [
      {
        model: Comment,
        attributes: ['id', 'body','createdAt', 'commentedBy'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
  })
  .then(dbData => {
    const post = dbData.get({plain:true})
    console.log('-----------------------------------------', post);
    let isLoggedIn = req.session.loggedIn
    res.render('single-post', {post, isLoggedIn})

  })
})

//Create a new comment for a post 
router.post('/comment/:postid', (req, res) => {
  if (req.session){
    Comment.create({
      body: req.body.comment_text,
      userId: req.session.user_id,
      postId: req.body.postid,
      commentedBy: req.session.username
    })
      .then(dbCommentData => {
        // res.json(dbCommentData)
        const post = dbCommentData.get({plain:true})
        res.render('single-post', {post})
      })
      // console.log("debugdbcommentcreate", dbCommentData)
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });

    }
});

//delete a comment
router.delete('/deleteComment/:id', withAuth, (req, res) => {
  console.log("Entering into the delete controller");
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
      res.json(dbCommentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;