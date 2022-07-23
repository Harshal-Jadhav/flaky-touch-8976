
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

let promocode_apply = () => {
    let check = JSON.parse(localStorage.getItem('check')) || 'false';
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
        } else {
            alert("Invalid promocode")
        }
        check = true;
        localStorage.setItem('check', check);
    }
}

document.getElementById('applyCode').addEventListener('click', promocode_apply);


