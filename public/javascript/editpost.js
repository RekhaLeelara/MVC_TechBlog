var editbutton = document.querySelectorAll('.titleposteddetails2')

editbutton.forEach(item => {
    item.addEventListener('click', editposthandler)
})

var updatebutton = document.getElementById('updatepost')
updatebutton.addEventListener('click', updateposthandler);
// var deletebutton = document.getElementById('deletepost')
// deletebutton.addEventListener('click', deleteposthandler);


function editposthandler(event) {
    console.log('clicked');
    event.preventDefault();
    let id = event.target.id
    console.log(id);
    // fetch('/editpost/'+ id, {
    //     method: 'get',
    //     headers: { 'Content-Type': 'application/json' }
    //   })
    location.replace(`/editpost/${id}`);
  }

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

  