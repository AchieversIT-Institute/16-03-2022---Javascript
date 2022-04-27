//function defination

// Es5 - creating function
// function getId(id) {
//   return document.getElementById(id);
// }

//es6+  - Arrow function sysntax
let getId = (id) => document.getElementById(id);


let getClasses = (classes) => document.getElementsByClassName(classes);

//e56 - function defination

let gstCalc = (totalAmount,gstPercentage=18) =>totalAmount + (gstPercentage*totalAmount/100);

// how to call a function
console.log(gstCalc(5000));

//debugger;

let username = getId("username"),
  email = getId("email"),
  password = getId("password"),
  form = getId("formRegister"),
  errorMsg = getClasses("error"),
  successIcon = getClasses("success-icon"),
  failureIcon = getClasses("failure-icon");

  console.log(failureIcon)

//form submit event attached
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateFields(username, 0, "Username cannot be blank");
  validateFields(email, 1, "Email cannot be blank");
  validateFields(password, 2, "Password cannot be blank");
});

let validateFields = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
