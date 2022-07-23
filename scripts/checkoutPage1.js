
//!-----------------------------------Function to toggle promocode div---------------------------------------
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


//!------------------------------Function to toggle Order Products height-----------------------------------------


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
let final = (+total + +shipping + +tax);
document.getElementById('finalPrice').innerText = final;
localStorage.setItem('finalValue', final);
localStorage.setItem('check', false);
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

let userdata = {};
let setData = () => {
    userdata.email = document.getElementById('email').value;
    userdata.firstName = document.getElementById('fname').value;
    userdata.lastName = document.getElementById('lname').value;
    userdata.address = document.getElementById('address').value;
    userdata.address2 = document.getElementById('address2').value;
    userdata.postalCode = document.getElementById('postalCode').value;
    userdata.city = document.getElementById('city').value;
    userdata.region = document.getElementById('region').value;
    userdata.phone = document.getElementById('phone').value;
    userdata.location = document.getElementById('location').value;

    localStorage.setItem('userData', JSON.stringify(userdata));
    window.location.href = "checkoutPage2.html"
}

document.querySelector('#ctnBtn1>button').addEventListener('click', setData);
document.querySelector('#ctnBtn2>button').addEventListener('click', setData);