var updatebutton = document.querySelectorAll('.titleposteddetails')

updatebutton.forEach(item => {
    item.addEventListener('click', openposthandler)
});


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

function deleteposthandler(event) {
    console.log('Delete button clicked');
    event.preventDefault();
    console.log("id: ", event.target.id);
    // let id = document.querySelector('.postTitle').id
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



function dashboardhandler(event) {
    event.preventDefault();
    console.log("dashboard button clicked")

    fetch('/dashboard', {
        method: 'get',
        // body: JSON.stringify({
        //   title,
        //   content
        // }),
        headers: { 'Content-Type': 'application/json' }
    })

    location.replace(`/dashboard`);

    // window.location.reload('/dashboard')
}
    // json method ///
