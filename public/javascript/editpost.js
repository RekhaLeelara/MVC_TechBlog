var editbutton = document.querySelectorAll('.titleposteddetails2')

editbutton.forEach(item => {
    item.addEventListener('click', editposthandler)
})

//Clicking on the post header to edit the post
function editposthandler(event) {
    console.log('clicked');
    event.preventDefault();
    let id = event.target.id
    console.log(id);
    location.replace(`/editpost/${id}`);
  }


var updatebutton = document.getElementById('updatepost')
updatebutton.addEventListener('click', updateposthandler);

//After clicking on the update post, the updated data gets saved
  function updateposthandler(event) {
    event.preventDefault();
    const title = document.getElementById('edittitle-input').value.trim();
    const content = document.getElementById('editcontent-input').value.trim();

  
    if (title && content) {
        let id = document.querySelector('[data-postId]').getAttribute('data-postId')
    fetch(`/updatepost/${id}`, {
        method: 'post',
        body: JSON.stringify({
          title,
          content
        }),
        headers: { 'Content-Type': 'application/json' }
      })
  
    }
    location.replace('/dashboard')
    
  }

  