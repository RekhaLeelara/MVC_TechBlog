document.getElementById('dashboardlnk').addEventListener('click', accessDashboard);


function accessDashboard() {
    console.log("Dashboard page invoked");
    console.log("req.session.loggedIn", req.session.loggedIn);
        console.log("Hello!!");
        const usernameElement = document.getElementById('username-input');
        const passwordElement = document.getElementById('password-input');
        fetch("dashboard", {
            method: 'get',
            body: JSON.stringify({
                username: usernameElement.value,
                password: passwordElement.value
            }),
            headers: { "Content-Type": "application/json" }
        })
            .then(function () {
                document.location.replace('/');
            })
            .catch(function (error) {
                console.log("error!!");
            });
}
