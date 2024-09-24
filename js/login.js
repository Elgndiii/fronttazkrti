function login() {
    l = document.getElementById("login").value;
    location.href = "login.html";
}
function register() {
    r = document.getElementById("register").value;
    location.href = "register.html";
}
function homepage() {
    e = document.getElementById("e-mail").value;
    p = document.getElementById("password").value;
    x = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    // password at least one number and one letter
    y = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (x.test(e) && y.test(p) == true) {
        location.href = "homepage.html";
    }
    if (x.test(e) == false && y.test(p) == false) {
        alert("E-mail or Password is incorrect")
        document.getElementById('e-mail').style.border = "5px solid red";
        document.getElementById('password').style.border = "5px solid red";

    }
    if (x.test(e) == false && y.test(p) == true) {
        alert("E-mail is incorrect")
        document.getElementById('e-mail').style.border = "5px solid red";
        document.getElementById('password').style.border = "5px solid green";



    }
    if (y.test(p) == false && x.test(e) == true) {
        alert("password is incorrect")
        document.getElementById('e-mail').style.border = "5px solid green";

        document.getElementById('password').style.border = "5px solid red";


    }
}
function Toggle() {
    let temp = document.getElementById("password");

    if (temp.type === "password") {
        temp.type = "text";

    }
    else {
        temp.type = "password";
    }
}



