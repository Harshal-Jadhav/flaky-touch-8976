let LSuserData = JSON.parse(localStorage.getItem("signupData")) || [];

let userN = document.querySelector("#userN");
userN.innerText=LSuserData.fname+" "+LSuserData.lname

let wishlist = document.querySelector("#wishlist");
wishlist.addEventListener("click",function(){
    window.location.href="./wishlist.html"
});
let profile = document.querySelector("#profile");
profile.addEventListener("click",function(){
    window.location.href="./profile.html"
    // console.log("data")
});