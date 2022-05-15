document.querySelector('#logout').addEventListener('click', logout);

function logout(){
    console.log("clicking logout");
    fetch("/logout", {
        method: 'post',
        headers: { "Content-Type": "application/json" }
    })
    .then(function(){
        document.location.replace('/login');
    })
    .catch(function(error){
        console.log("error!!");
    });
}

//   document.getElementById('signUp-btn').addEventListener('click', createUser);


// function createUser(){
//     console.log("Hello!!");
//     const usernameElement = document.getElementById('username-input');
//     const passwordElement = document.getElementById('password-input');
//     fetch("user", {
//         method: 'post',
//         body: JSON.stringify({
//             username: usernameElement.value,
//             password: passwordElement.value
//         }),
//         headers: { "Content-Type": "application/json" }
//     })
//     .then(function(){
//         document.location.replace('/');
//     })
//     .catch(function(error){
//         console.log("error!!");
//     });
// }