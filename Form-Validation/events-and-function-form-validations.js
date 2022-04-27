const  validateLogin = (e) => {
e.preventDefault();
let username = document.getElementById('uname').value;
let password = document.getElementById('pwd').value;
if(username==""){
    document.getElementById('uname').style.border = "1px solid red";
    document.getElementById('userErr').style.display = "block";
}else if(password==""){
    //alert('Password can\'t be empty');
     document.getElementById('passErr').style.display = "block";
     document.getElementById('pwd').style.border = "1px solid red";
}else{
    loginForm.submit();
}
}

// attach an event using JS
document.getElementById('loginBtn').addEventListener('click',validateLogin);

/* logo redirection using JS */
document.getElementById('ait-logo').addEventListener('click',function(){
 window.open('https://www.achieversit.com');
});