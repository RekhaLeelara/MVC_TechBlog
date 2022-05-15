var updatebutton = document.querySelectorAll('.titleposteddetails')

updatebutton.forEach(item => {
    item.addEventListener('click', openposthandler)
});

//To open a post from the home page to edit/delete the post
function openposthandler(event) {
    event.preventDefault();
    let postId = event.target.id
    fetch('/comment/' + postId, {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    })

    location.replace(`/comment/${postId}`);
}

var deletePost = document.querySelector('.btn-DeletePostblock')
deletePost.addEventListener('click', deleteposthandler);

//Deleting the post
function deleteposthandler(event) {
    console.log('Delete button clicked');
    event.preventDefault();
    console.log("id: ", event.target.id);
    let id = event.target.id
    console.log("id: ", id);
    fetch(`/deletePostpage/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
            id
        }),
        headers: { 'Content-Type': 'application/json' }
    })
    location.replace(`/`);
}

var createbutton = document.querySelector('.dashboard')
createbutton.addEventListener('click', dashboardhandler);


//Taking user to the dashboard page after clicking on the Dashboard link
function dashboardhandler(event) {
    event.preventDefault();
    console.log("dashboard button clicked")

    fetch('/dashboard', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
    })

    location.replace(`/dashboard`);

}

