function layoutRegister() {
    const login_form = document.querySelector('section.login_form');
    const register_form = document.querySelector('section.register_form');

    login_form.style.display = "none";
    register_form.style.display = "block";
}

function layoutLogin() {
    const login_form = document.querySelector('section.login_form');
    const register_form = document.querySelector('section.register_form');

    login_form.style.display = "block";
    register_form.style.display = "none";
}


/*
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    const savedEmail = "Bruno";
    const savedPassword = "CavaScript";

    if (email === savedEmail && password === savedPassword) {
        alert(`Welcome back, ${email}!`);
        window.location.href = 'config/dashboard.html';
    } else {
        alert("Invalid email or password. Please try again.");
    }
});


document.getElementById("btn-2").addEventListener("click", function() {


    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email && password) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Sign up successful! You can now log in.");
    } else {
        alert("Please fill in both email and password fields.");
    }
});*/