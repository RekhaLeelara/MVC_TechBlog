// const { response } = require('express');

var loginform = document.getElementById('loginform')
loginform.addEventListener('submit', loginformhandler);

function loginformhandler(event) {
    event.preventDefault();
    const username = document.getElementById('username-input').value.trim();
    const password = document.getElementById('password-input').value.trim();
  
    if (username && password) {

    
    fetch('login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      })
        .then(response => response.json())
        .then(function(data){
            document.location.replace('/');
        });

    }
    // json method ///
    
}
  
