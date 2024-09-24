function login() {
    n=document.getElementById("username1").value;
    p=document.getElementById("phone").value;
    e=document.getElementById("e-mail").value;
    q=document.getElementById("password").value;
    k=document.getElementById("password2").value;



    x= /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/;
    y= /^[0][1][0|1|2|5][0-9]{8}$/;
    i = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
    z=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    w=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/ 



    
        if (x.test(n) == true) {
            document.getElementById('username1').style.border = "5px solid green";
        }
        if (y.test(p) == true) {
            document.getElementById('phone').style.border = "5px solid green";
        }
        if(i.test(e) == true){
            document.getElementById('e-mail').style.border = "5px solid green";
        }
        if(z.test(q) == true){
            document.getElementById('password').style.border = "5px solid green";
        }
        if(w.test(k)==z.test(q)){
            document.getElementById('password2').style.border = "5px solid green";
        }
        if(x.test(n) == true && y.test(p) == true && i.test(e) == true && z.test(q) == true && w.test(k)==z.test(q) ){
location.href= "login.html";
        }
        else(
            alert("something is wrong!")
        )


    
    
}
function register() {
    r = document.getElementById("register").value;
    location.href = "register.html";
}
function logiin(){
    s=document.getElementById("log-in").value;
    location.href = "login.html";


}
function Toggle() {
        let temp = document.getElementById("password");
         
        if (temp.type === "password" ) {
            temp.type = "text";
            
        }
        else {
            temp.type = "password";
        }
    }

