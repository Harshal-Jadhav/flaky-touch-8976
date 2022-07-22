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