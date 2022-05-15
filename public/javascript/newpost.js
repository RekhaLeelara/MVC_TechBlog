// const { response } = require('express');

var createbutton = document.getElementById('newpost')
createbutton.addEventListener('click', newposthandler);



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
        
        // window.location.reload('/dashboard')
    }
    // json method ///
    
}






