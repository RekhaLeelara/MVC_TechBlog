// const { response } = require('express');

var createbutton = document.getElementById('newpost')
createbutton.addEventListener('click', newposthandler);


//Create a new post after clicking on Add New button
function newposthandler(event) {
    event.preventDefault();
    const title = document.getElementById('newtitle-input').value.trim();
    const content = document.getElementById('newcontent-input').value.trim();

  
    if (title && content) {
    fetch('/createpost', {
        method: 'post',
        body: JSON.stringify({
          title,
          content
        }),
        headers: { 'Content-Type': 'application/json' }
      })

      location.replace(`/dashboard`);
        
    }
    
}






