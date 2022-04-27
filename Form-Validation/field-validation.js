const  validateInput = (e) => {
//console.log(e.target.value.length);
if(e.target.value === ""){
  e.target.style.border = "1px solid red";
  if(e.target.id==="uname"){
    document.getElementById('userErr').style.display = "block";
  }else{
    document.getElementById('passErr').style.display = "block";
  }             
  
}else if(e.target.value.length<=5){
  e.target.style.border = "1px solid red";
  document.getElementById('passErr').innerHTML = "Password shouldn't be lesser than 5 character";

}
}

// attach an event using JS
document.getElementById('uname').addEventListener('blur',validateInput);
document.getElementById('pwd').addEventListener('blur',validateInput);

/* logo redirection using JS */
document.getElementById('ait-logo').addEventListener('click',function(){
 window.open('https://www.achieversit.com');
});