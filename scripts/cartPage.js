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
        const pd1d2 = document.createElement('div');
        pd1d2.setAttribute('id', "pd1d2");

        // *-----------------Child of Pd1d2


    })
}