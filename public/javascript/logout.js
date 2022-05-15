document.querySelector('#logout').addEventListener('click', logout);

//Logging out of the user
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