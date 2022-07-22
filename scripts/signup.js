let from = document.querySelector("form");
let LSsignupData = JSON.parse(localStorage.getItem("signupData")) || [];
from.addEventListener("submit",function(event){
    event.preventDefault();
    let SignupData = {
        email:from.email.value,
        fname:from.Fname.value,
        lname:from.Lname.value,
        password:from.password.value
    }
    localStorage.setItem("signupData",JSON.stringify(SignupData));
    alert("SignUp Successful.")
    console.log(SignupData)
    window.location.href="./index.html";
});