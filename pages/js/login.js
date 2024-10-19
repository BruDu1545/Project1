function checkUser(){
    event.preventDefault();

    const email = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    const savedEmail = "Bruno";
    const savedPassword = "CavaScript";

    if (email === savedEmail && password === savedPassword) {
        alert(`Bem-vindo de volta, ${email}!`);
        window.location.href = 'config/dashboard.html';
    } else {
        alert("Usuário ou senha inválidos. Tente novamente.");
    }
}

function layoutRegister() {
    document.getElementById("login_section").style.display = "none";
    document.getElementById("register_section").style.display = "block";
}

function layoutLogin() {
    document.getElementById("register_section").style.display = "none";
    document.getElementById("login_section").style.display = "block";
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