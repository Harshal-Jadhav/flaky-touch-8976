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
