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







// !Function to toggle promocode div
let toggle = () => {
    let x = document.querySelector('#promocode')
    if (x.style.display == 'flex') {
        x.style.display = 'none'
        document.querySelector('#prcheck>span').innerText = 'add'
    } else {
        x.style.display = 'flex'
        document.querySelector('#prcheck>span').innerText = 'remove'
    }
}
document.querySelector('#prcheck').addEventListener('click', toggle)


// !Function to toggle Order Products height
let toggleHeight = () => {
    let x = document.getElementById('orderProducts');
    if (x.style.height == '435px') {
        x.style.height = 'fit-content'
        document.getElementById('showbtn').innerText = '- Show Less'
    } else {
        x.style.height = '435px'
        document.getElementById('showbtn').innerText = '+ Show More'
    }
}
document.getElementById('showbtn').addEventListener('click', toggleHeight);

let total = localStorage.getItem('total');
document.getElementById('totalvalue').innerText = `Rs ${total}`;
let shipping = 6987
document.getElementById('Shippingvalue').innerText = `Rs ${shipping}`
let tax = (+total * 0.2).toFixed();
document.getElementById('taxvalue').innerText = `Rs ${tax}`;
let final = localStorage.getItem('finalValue')
document.getElementById('finalPrice').innerText = final;
localStorage.setItem('finalValue', final);


let promocode_apply = () => {
    let check = JSON.parse(localStorage.getItem('check'));
    let code = document.getElementById('promoCode').value;
    console.log(check)
    if (check == true) {
        alert('PromoCode already applied');
    } else {
        if (code == 'masai30') {
            let discount = total * 0.3;
            final = (final - discount).toFixed();
            document.getElementById('finalPrice').innerText = final;
            localStorage.setItem('finalValue', final);
            check = true;
            alert('Promocode Applide Sucessfuly')
        } else {
            alert("Invalid promocode")
        }
        
        localStorage.setItem('check', check);
    }
}

document.getElementById('applyCode').addEventListener('click', promocode_apply);

let cart = JSON.parse(localStorage.getItem('myBag')) || []

let append = (data) => {
    document.getElementById('orderProducts').innerHTML = null;
    data.forEach((el) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'opc');

        const imgdiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = el.frontImage;
        imgdiv.append(img);

        const details = document.createElement('div');
        const name = document.createElement('h4');
        name.innerText = el.description;
        const color = document.createElement('p');
        color.innerText = `Color: ${el.color}`;
        const size = document.createElement('p');
        size.innerText = el.size;
        const qty = document.createElement('p');
        qty.innerText = `Qty: ${el.qty}`;
        const price = document.createElement('p');
        price.innerText = `Rs ${el.sale}`;

        details.append(name, color, qty, price);

        card.append(imgdiv, details);
        document.getElementById('orderProducts').append(card);
    })
}
append(cart);


let userData = JSON.parse(localStorage.getItem('userData'));
document.querySelector('#delAdd>h4').innerText = `${userData.firstName} ${userData.lastName}`
document.querySelector('#delAdd>p:nth-child(3)').innerText = userData.address;
document.querySelector('#delAdd>p:nth-child(4)').innerText = `${userData.city} ${userData.region} ${userData.postalCode}`
document.querySelector('#delAdd>p:nth-child(5)').innerText = userData.location;


let placeOrder = () => {
    let card = document.getElementById('cardNumber').value;
    let expiry = document.getElementById('mmyy').value;
    let cvv = document.getElementById('cvv').value;

    if (card == '123456789') {
        if (expiry == '05/25') {
            if (cvv == '618') {
                alert(`Thank You ${userData.firstName} ${userData.lastName} your order has been confirmed`);
                setTimeout(() => {
                    alert('Your Order has been shipped')
                }, 5000);
                setTimeout(() => {
                    alert('Your Order has been Successfully Delivered!!  ThankYou for Shopping with us');
                    // window.location.href="index.html"

                }, 8000);
            } else {
                alert('Invalid CVV')
            }
        } else {
            alert('Invalid Exipry')
        }
    } else {
        alert('Invalid Card')
    }
}

document.getElementById('placeorder').addEventListener('click', placeOrder)
document.getElementById('placeorder2').addEventListener('click',placeOrder)