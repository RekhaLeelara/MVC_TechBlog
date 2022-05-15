var addcomment = document.querySelector('.btn-block')
addcomment.addEventListener('click', addnewcommenthandler);

var deletePost = document.querySelector('.btn-DeleteCommentblock')
deletePost.addEventListener('click', deleteCommenthandler);


function addnewcommenthandler(event) {
    console.log('clicked');
    event.preventDefault();
    console.log("id: ", event.target.id);
    // let id = document.querySelector('.postTitle').id
    let id = event.target.id
    console.log("id: ", id);
    const comment_text = document.getElementById('newcomment-input').value.trim();

  
    if (comment_text) {
      let postid = id;
    fetch(`/comment/${id}`, {
        method: 'post',
        body: JSON.stringify({
          comment_text,
          postid
        }),
        headers: { 'Content-Type': 'application/json' }
      })}
    location.replace(`/comment/${postid}`);
  }

  function deleteCommenthandler(event) {
    console.log('Delete button clicked');
    event.preventDefault();
    console.log("comment id: ", event.target.id);
    // let id = document.querySelector('.postTitle').id
    let commentid = event.target.id
    console.log("comment id: ", commentid);
    // console.log("post id: ", id);
    fetch(`/deleteComment/${commentid}`, {
        method: 'DELETE',
        body: JSON.stringify({
          commentid
        }),
        headers: { 'Content-Type': 'application/json' }
      })
    location.replace(`/`);
  }