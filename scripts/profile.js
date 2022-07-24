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





let LSuserData = JSON.parse(localStorage.getItem("signupData")) || [];

let email = document.querySelector("#email");
email.innerText=LSuserData.email;
let name = document.querySelector("#name");
name.innerText=LSuserData.fname+" " +LSuserData.lname;

let userN = document.querySelector("#userN");
userN.innerText=LSuserData.fname+" "+LSuserData.lname

let wishlist = document.querySelector("#wishlist");
wishlist.addEventListener("click",function(){
    window.location.href="./wishlist.html"
});
let profile = document.querySelector("#profile");
profile.addEventListener("click",function(){
    window.location.href="./profile.html"
});