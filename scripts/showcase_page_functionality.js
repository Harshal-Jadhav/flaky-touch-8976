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




let showData = JSON.parse(localStorage.getItem('myShowProductPage'))
// console.log(showData)

display(showData)

function display(data) {
    // console.log(data)
    let maincontainer = document.getElementById('container')
    let div = document.createElement('div')
    div.style.lineHeight = '25px'

    let image = document.createElement('img')
    image.src = data.frontImage
    image.style.width = '100%'
    image.style.height = '100%'



    let anniversary = document.createElement('h4')
    anniversary.innerText = 'Anniversary Sale'
    anniversary.style.display = 'inline'
    anniversary.style.background = 'yellow'

    let desc = document.createElement('h2')
    desc.innerText = data.description
    desc.className = 'fontweight-100'
    desc.style.color = '#393939'



    let title = document.createElement('p')
    title.innerText = data.title
    title.className = 'ProductTitle'


    let colorDiv = document.createElement('div')
    colorDiv.style.border='1px solid black'
    colorDiv.style.width='98%'
    colorDiv.style.padding='7px 0px 7px 7px'
    colorDiv.style.margin='auto'
    colorDiv.style.marginTop='10px'
    colorDiv.style.borderColor='#393939'


    let color = document.createElement('span')
    color.innerText = 'Color: '

    let colorName = document.createElement('span')
    colorName.innerText = `${data.color}`
    color.className = 'fontweight-100'


    let price = document.createElement('h1')
    price.innerText = `Sale: INR ${data.sale}`
    price.className = 'ProductPrice'
    price.style.color = '#393939'

    let aftersale = document.createElement('p')
    aftersale.innerText = `After Sale: INR ${data.AfterSalePrice}`
    aftersale.className = 'fontweight-100'

    let explain = document.createElement('p')
    explain.innerText = 'Supremely soft pima cotton adds to the everyday comfort of a closet-staple T-shirt with side vents'

    let size = document.createElement('div')
    let fit = document.createElement('span')
    fit.innerText = 'Fit: '
    fit.style.fontWeight = '600'

    let truesize = document.createElement('span')
    truesize.innerText = 'True to size'

    let selectDiv = document.createElement('div')




    let selectSize = document.createElement('select')
    selectSize.className = 'selectSize'
    var option1 = document.createElement("option");
    option1.value = 'Small';
    option1.text = "Small";

    var option2 = document.createElement("option");
    option2.value = 'Medium';
    option2.text = "Medium";

    var option3 = document.createElement("option");
    option3.value = 'Large';
    option3.text = 'Large';

    var option4 = document.createElement("option");
    option4.value = 'X-Large';
    option4.text = 'X-Large';

    var option5 = document.createElement("option");
    option5.value = 'XX-Large';
    option5.text = 'XX-Large';

    selectSize.add(option1);
    selectSize.add(option2);
    selectSize.add(option3);
    selectSize.add(option4);
    selectSize.add(option5);

    selectDiv.append(selectSize);

    selectSize.addEventListener('click',()=>{
        let size = selectSize.value;
        addSize(data,size)
    })






    let bagButton = document.createElement('button')
    bagButton.innerText = 'Add to Bag'
    bagButton.style.width = '100%'
    bagButton.style.background = 'black'
    bagButton.style.color = 'white'
    bagButton.style.padding = '10px 0px'
    bagButton.style.cursor = 'pointer'
    bagButton.style.marginTop='30px'
    bagButton.addEventListener('click',()=>
    {
        myAddToBag(data)
    })

    bagButton.addEventListener('click',()=>
    {
        myQuickViewFun(data)
    })


    let wishlist = document.createElement('p')
    wishlist.innerText = '+Add to Wish List'
    wishlist.className='addTowish'
    wishlist.style.cursor='pointer'
    wishlist.addEventListener('click',()=>
    {
        myAddToWishListFunction(data)
    })



    size.append(fit, truesize)
    colorDiv.append(color,colorName)
    document.querySelector('.imageOnly').append(image)
    div.append(desc, title, price, aftersale, anniversary, explain, size, selectDiv, colorDiv, bagButton, wishlist)
    maincontainer.append(div)



}




// back to detail button

let backToDetail = document.getElementById("upper-heading")
backToDetail.addEventListener('click',()=>
{
    window.location.href='../flaky-touch-8976/product_page.html'

})



// -------------------- ADd to bag-------------------------
let bag = JSON.parse(localStorage.getItem('myBag'))||[];
function myAddToBag(el)
{
    bag.push(el)
    localStorage.setItem('myBag',JSON.stringify(bag))        // Key is ------- myBag
    document.querySelector('.quick-view').style.visibility='visible'

    
}


// -------------------------My quick View data--------------------

function myQuickViewFun(data)
{
    let maincontainer = document.getElementById('quick-detail')
    maincontainer.innerHTML=null
    let div = document.createElement('div')

    let close = document.createElement('p')
    close.innerText="X"
    close.style.cursor='pointer'
    close.style.marginLeft='200px'
    close.addEventListener('click',()=>
    {
        myCloseFunction()
    })
    // div.style.lineHeight = '25px'

    let image = document.createElement('img')
    image.src = data.frontImage
    image.style.width = '100%'
    image.style.height = '100%'



    let anniversary = document.createElement('h1')
    anniversary.innerText = 'Anniversary Sale'

    let desc = document.createElement('h2')
    desc.innerText = data.description
    desc.className = 'fontweight-100'
    desc.style.color = '#393939'



    let title = document.createElement('p')
    title.innerText = data.title
    title.className = 'ProductTitle'


    // let size = document.createElement('p')
    // size.innerText=data.size
    
    let sizeDiv = document.createElement('div')
    sizeDiv.style.border='1px solid black'
    sizeDiv.style.width='98%'
    sizeDiv.style.padding='7px 0px 7px 7px'
    sizeDiv.style.margin='auto'
    sizeDiv.style.marginTop='10px'
    sizeDiv.style.borderColor='#393939'


    let size = document.createElement('span')
    size.innerText = 'Size: '

    let sizeName = document.createElement('span')
    sizeName.innerText = `${data.size}`
    sizeName.className = 'fontweight-100'

    sizeDiv.append(size,sizeName)

    let colorDiv = document.createElement('div')
    colorDiv.style.border='1px solid black'
    colorDiv.style.width='98%'
    colorDiv.style.padding='7px 0px 7px 7px'
    colorDiv.style.margin='auto'
    colorDiv.style.marginTop='10px'
    colorDiv.style.borderColor='#393939'


    let color = document.createElement('span')
    color.innerText = 'Color: '

    let colorName = document.createElement('span')
    colorName.innerText = `${data.color}`
    color.className = 'fontweight-100'


    let price = document.createElement('h2')
    price.innerText = `Sale: INR ${data.sale}`
    price.className = 'ProductPrice'
    price.style.color = '#393939'

    let aftersale = document.createElement('p')
    aftersale.innerText = `After Sale: INR ${data.AfterSalePrice}`
    aftersale.className = 'fontweight-100'


    let checkoutbtn = document.createElement('button')
    checkoutbtn.innerText='Checkout'
    checkoutbtn.style.width = '100%'
    checkoutbtn.style.background = 'black'
    checkoutbtn.style.color = 'white'
    checkoutbtn.style.padding = '10px 0px'
    checkoutbtn.style.cursor = 'pointer'
    checkoutbtn.style.marginTop='30px'
    checkoutbtn.addEventListener('click',()=>
    {
        myCheckou(data)
    })



    colorDiv.append(color,colorName)
    let imageDiv = document.getElementById('quick-image')
    imageDiv.innerHTML=null
    imageDiv.append(image)
    div.append(close,anniversary,title,sizeDiv,colorDiv,price,aftersale,checkoutbtn)
    maincontainer.append(div)

}







// -----------------My Add to Wish List function---------------------

let wishList = JSON.parse(localStorage.getItem('myWishList'))||[];
function myAddToWishListFunction(el)
{
    wishList.push(el)
    localStorage.setItem('myWishList',JSON.stringify(wishList))        // Key is ------- myProductBag
}





// --------------------------My checkout--------------------------
// let checkout=[]
function myCheckou(data)
{
    // checkout.push(data)
    // localStorage.setItem('myBag',JSON.stringify(checkout))
    window.location.href='../flaky-touch-8976/cartPage.html'
}



// My close function 
function myCloseFunction()
{
    document.querySelector('.quick-view').style.visibility='hidden'
}











// Recently viewed product

let products = [{
    frontImage: 'https://n.nordstrommedia.com/id/sr3/13c32f8f-6274-416d-ad09-6eb752c36d55.jpeg?h=365&w=240&dpr=2',


    title: "Robert Barakett",
    description: 'Georgia Crewneck T-shirt',
    color: 'Gray',
    sale: '3872.30',
    AfterSalePrice: '5,473.20',
    qty:1,
    
    

},

// 2
{
    frontImage: 'https://n.nordstrommedia.com/id/sr3/dc694788-2d5f-445c-988c-bf0638c0c351.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',


    title: "AllSaints",
    description: 'Brace Tonic Crewneck T-Shirts',
    color: 'Black',
    sale: '3367.80',
    AfterSalePrice: '4,631.20',
    qty:1,

},

// 3
{
    frontImage: 'https://n.nordstrommedia.com/id/sr3/b785bfa0-e1a3-463f-87ef-dc78e4e988f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',


    title: "Rodd & Gunn",
    description: 'New Haven Sports Fit Pique Polo',
    color: 'Dark Gray',
    sale: '3956.50',
    AfterSalePrice: '6,694.70',
    qty:1,

},

// 4
{
    frontImage: 'https://n.nordstrommedia.com/id/sr3/fae82a46-363c-45f0-a6d9-6089ce560a7e.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',


    title: "Peter Millar ",
    description: 'Minglewooe Geo Print Short Sleeve',
    color: 'Light Blue',
    sale: '7569.85',
    AfterSalePrice: '12,209.44',
    qty:1,

},

// 5
{
    frontImage: 'https://n.nordstrommedia.com/id/sr3/e3524928-2e00-4d8b-96a9-e5ba99b00d2a.jpeg?h=365&w=240&dpr=2',


    title: "Rodd & Gunn",
    description: 'Regular Fit Ellersile Linen Shirt',
    color: 'White',
    sale: '6314.38',
    AfterSalePrice: '10,777.20',
    qty:1,

},

// 6
{
    frontImage: 'https://n.nordstrommedia.com/id/sr3/ec531f0f-cedf-485b-89d4-a962779ef3cb.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196',


    title: "Vince ",
    description: 'Classic Regular Fit Polo',
    color: 'Pine Tree',
    sale: '5051.34',
    AfterSalePrice: '7,999.20',
    qty:1,

},

]


let showProduct = (data) => {
    let maincontainer = document.getElementById('recently-viewed')
    maincontainer.innerHTML = null
    data.forEach((el, index) => {
        let div = document.createElement('div')
        div.style.fontSize='15px'
        div.style.cursor='pointer'

        let image = document.createElement('img')
        image.src = el.frontImage
      

        let anniversary = document.createElement('h4')
        anniversary.innerText='Anniversary Sale'
        anniversary.style.display='inline'
        anniversary.style.background='yellow'

        let title = document.createElement('p')
        title.innerText = el.title
        title.className='ProductTitle'

       
        let color = document.createElement('p')
        color.innerText = `Color: ${el.color}`
        color.className='fontweight-100'

        let price = document.createElement('p')
        price.innerText = `Sale: INR ${el.sale}`
        price.className='ProductPrice'
        price.style.fontWeight='600'

        let aftersale = document.createElement('p')
        aftersale.innerText = `After Sale: INR ${el.AfterSalePrice}`
        aftersale.className='fontweight-100'     

        div.append(image, anniversary, title, color, price, aftersale)
        image.addEventListener('click',()=>
        {
            myShowProductFunction(el)
        })
        

        maincontainer.append(div)
    })
}


showProduct(products)


// Add size function
let addSize = (data,size)=>{
    data.size = size;
}