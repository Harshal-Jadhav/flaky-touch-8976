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
    if (check == 'true') {
        window.location.href = "profile.html"
    } else {
        window.location.href = "signin.html"
    }
})







import signin from "../components/signin.js"
let LSuserData = JSON.parse(localStorage.getItem("signupData")) || [];

let form = document.querySelector("form");
let divSignin = document.getElementById("signin");
form.addEventListener("submit",function(event)
{
    event.preventDefault();

    let emailCheck = {
        email:form.email.value,
        
    }
    if(emailCheck.email !== LSuserData.email)
    {
        alert("Please Create account");
        window.location.href="./signup.html";
    }
    else{
        alert("Please sign in");
        divSignin.innerHTML=   signin();
        let form = document.querySelector("form");
        form.addEventListener("submit",function(event){
            event.preventDefault();
            // document.querySelector("#email").value=LSuserData.email;
            let signinData = {
                email:form.email.value,
                password:form.password.value,
            }
            userChecking(signinData);

            console.log(LSuserData.email)
        });

        
    }
        
    
});


let userChecking = (data) => {
    if(LSuserData.password == data.password  && data.email == LSuserData.email)
    {
        alert("Login successful");
        localStorage.setItem("loginData",JSON.stringify(data));
        window.location.href="./index.html";
    }
    else{
        
        alert("wrong Email or Password")
    }
    
    

}
