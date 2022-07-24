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






let data = JSON.parse(localStorage.getItem('myBag')) || [];


let append = (data) => {
    document.getElementById('cart').innerHTML = null;
    data.forEach((el) => {

        //!------------------------------ making li tag-----------

        const card = document.createElement('li');
        card.setAttribute('class', 'product');

        //*--------------------------------Child of Li--------------

        const br = document.createElement('br');
        const hr = document.createElement('hr');
        const pd1 = document.createElement('div');
        pd1.setAttribute('class', 'pd1');

        // *---------------------------Child of pd1----------------

        const imgdiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = el.frontImage;
        imgdiv.append(img);
        const pd1d2 = document.createElement('div');
        pd1d2.setAttribute('id', "pd1d2");

        // *-----------------Child of Pd1d2----------------------

        const productDetails = document.createElement('div');
        const quantity = document.createElement('div');
        const cardButtons = document.createElement('div');
        productDetails.setAttribute('id', 'productDetails');
        quantity.setAttribute('id', 'quantity');
        cardButtons.setAttribute('id', 'cardButtons');

        // ?---------------Child of productDetails----------------

        const div1 = document.createElement('div');
        const div2 = document.createElement('div');
        const div3 = document.createElement('div');

        // ---------------child of div1--------------------------

        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        p1.innerText = el.title;
        p2.innerText = el.description
        // p3.innerText = el.size;
        p4.innerText = `Color: ${el.color}`;
        const br2 = document.createElement('br');
        const br3 = document.createElement('br');
        div1.append(p1, br2, p2,p4)

        // ----------------Child of div2-----------------

        const block = document.createElement('p');
        const blkbtn = document.createElement('span');
        blkbtn.setAttribute('class', 'material-symbols-outlined')
        blkbtn.innerText = 'block';
        const blktxt = document.createElement('span');
        blktxt.innerText = 'Not available for PickUp'
        block.append(blkbtn, blktxt);
        block.setAttribute('class', 'block');


        const del = document.createElement('div');

        const delivery = document.createElement('div');
        delivery.setAttribute('id', 'delivery')

        const radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('checked', 'true');
        radio.setAttribute('id', 'deliv')
        const d = document.createElement('p');
        d.innerText = 'Delivery'

        delivery.append(radio, d);
        const int = document.createElement('p');
        int.innerText = "International orders usually arrive within 5-13 business days.We'll give you delivery dates incheckout."

        del.append(delivery, int);

        div2.append(block, del);

        // --------------Child of Div 3----------------

        const price = document.createElement('p');
        price.innerHTML = null;
        const priceSpan = document.createElement('span');
        priceSpan.innerText = `(${el.sale} each)`
        if (el.qty == 1) {
            price.innerText = `Rs ${(+el.sale).toFixed()}`;
        } else {
            const finalprice = document.createElement('span');
            finalprice.innerText = `Rs ${(Number(el.qty) * Number(el.sale)).toFixed()} `;
            const eachprice = document.createElement('span');

            price.append(finalprice, priceSpan);
        }
        div3.append(price)

        productDetails.append(div1, div2, div3);

        // ?-----------------Child of Quantity-----------
        const select = document.createElement('select');
        select.setAttribute('id', 'qty');
        for (let i = 1; i <= 10; i++) {
            const opt = document.createElement('option');
            opt.setAttribute('value', `${i}`)
            opt.innerText = i;
            select.append(opt);
        }
        select.value = el.qty;

        select.addEventListener('change', () => {
            let qty = select.value;
            qtyChange(qty, el);
        })
        const qtytxt = document.createElement('span');
        qtytxt.innerText = 'Qty'
        qtytxt.setAttribute('class','blue')
        quantity.append(qtytxt, select)

        //?-----------Child of cardButtonos----------

        const remo = document.createElement('button');
        remo.setAttribute('class', 'remove')
        remo.innerText = 'remove';
        remo.addEventListener('click', () => {
            removeItem(el)
        })

        const save = document.createElement('button');
        save.setAttribute('class', 'saveForLater')
        save.innerText = 'Save for Later'
        save.addEventListener('click', () => {
            saveforlater(el);
        })

        cardButtons.append(remo, save);

        pd1d2.append(productDetails, quantity, cardButtons);
        pd1.append(imgdiv, pd1d2);

        card.append(br, hr, br, pd1, br3);

        document.getElementById('cart').append(card);

    })
}

append(data);

// *-------------------------------Function to calculate the total value of the cart----------------------
let total = () => {
    let sum = 0;
    data.forEach((el) => {
        sum += (+el.qty * +el.sale)
    })
    sum = sum.toFixed()
    console.log(sum)
    document.getElementById('total').innerText = `Rs ${sum}`
    localStorage.setItem('total', sum);
}
total();

//*--------------------------------Function to calculate the total after the change of quantity
let qtyChange = (qty, el) => {
    el.qty = qty;
    localStorage.setItem('myBag', JSON.stringify(data));
    append(data);
    console.log(data);
    total();
    window.location.reload();
}

// *------------------------------Function to removet the itemfrom the bag-----------------------
let removeItem = (el) => {
    let index = data.indexOf(el);
    data.splice(index, 1);
    localStorage.setItem('myBag', JSON.stringify(data));
    append(data);
    total();
    update();
    window.location.reload();
}

// *------------------------------Function to save the product to the save for later section-------------------
let savedForLater = JSON.parse(localStorage.getItem('saveForLater')) || [];
let saveforlater = (el) => {
    let index = data.indexOf(el);
    let temp = data[index];
    data.splice(index, 1);
    savedForLater.push(temp);
    console.log(savedForLater);
    localStorage.setItem('myBag', JSON.stringify(data));
    localStorage.setItem('saveForLater', JSON.stringify(savedForLater));
    append(data);
    update()
    window.location.reload();
}

//*-------------------------------Update the values-----------------------------

let update = () => {
    document.querySelector('#sbsl>div:first-child').innerText = `Shopping Bag (${data.length})`;
    document.querySelector('#sbsl>div:last-child').innerText = `Saved For Later (${savedForLater.length})`;
    let total_itemCount = 0;
    data.forEach((el) => {
        total_itemCount += Number(el.qty);
    })
    document.getElementById('itemCount').innerText = `Delivery (${total_itemCount} items) to India`
    
}
update();

// *--------------Conditions if the cart is empty;

if (data.length > 0) {
    document.querySelector('#cartmain>div:first-child').style.display = 'flex';
    document.querySelector('#cartmain>div:nth-child(2)').style.display = 'flex';
    document.getElementById('appendingDiv').style.display = 'block'
    document.getElementById('sub').style.display = 'block';
    document.getElementById('emptyCart').style.display = 'none';
} else {
    document.querySelector('#cartmain>div:first-child').style.display = 'none';
    document.querySelector('#cartmain>div:nth-child(2)').style.display = 'none';
    document.getElementById('appendingDiv').style.display = 'none'
    document.getElementById('sub').style.display = 'none';
    document.getElementById('emptyCart').style.display = 'block';
}

// *-------------------------------Function to toggle between shopping bag and add to save later------------------

document.querySelector('#sbsl>div:first-child').addEventListener('click', () => {
    window.location.href = 'cartPage.html';
})
document.querySelector('#sbsl>div:last-child').addEventListener('click', () => {
    window.location.href = 'saveLaterPage.html';
})

document.getElementById('checkout').addEventListener('click', () => {
    window.location.href = 'checkoutPage1.html';
})

document.getElementById('continueShopping').addEventListener('click', () => {
    window.location.href = 'product_page.html'
})