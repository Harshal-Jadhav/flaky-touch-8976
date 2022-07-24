// !ALL IMPORTS ARE LISTED HERE;
import navbar from '../components/navbar.js';
import footer from '../components/footer.js';
document.getElementById('navbar').innerHTML = navbar();
document.getElementById('footer').innerHTML = footer();

let check = localStorage.getItem('login');
if (check == 'true') {
    let data = JSON.parse(localStorage.getItem('signupData'))
    document.getElementById('login').innerText = `Hi ${data.fname}`
} else {
    document.getElementById('login').innerText = 'Login'
}
document.getElementById('logo').addEventListener('click', () => {
    window.location.href = 'index.html'
})
document.getElementById('mensPage').addEventListener('click', () => {
    window.location.href = 'product_page.html'
})
document.getElementById('cartPage').addEventListener('click', () => {
    window.location.href = 'cartPage.html'
})
document.getElementById('login').addEventListener('click', () => {
    if (check == true) {
        window.location.href = "profile.html"
    } else {
        window.location.href = "signin.html"
    }
})





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
    localStorage.setItem('login',true)
    window.location.href="./index.html";
});