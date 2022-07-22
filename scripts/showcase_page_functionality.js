let showData = JSON.parse(localStorage.getItem('myShowProductPage'))
console.log(showData)

display(showData)

function display(data) {
    console.log(data)
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






    let bagButton = document.createElement('button')
    bagButton.innerText = 'Add to Bag'
    bagButton.style.width = '100%'
    bagButton.style.background = 'black'
    bagButton.style.color = 'white'
    bagButton.style.padding = '10px 0px'
    bagButton.style.cursor = 'pointer'
    bagButton.style.marginTop='30px'


    let wishlist = document.createElement('p')
    wishlist.innerText = '+Add to Wish List'
    wishlist.style.textDecoration = 'underline'



    size.append(fit, truesize)
    colorDiv.append(color,colorName)
    document.querySelector('.imageOnly').append(image)
    div.append(desc, title, price, aftersale, anniversary, explain, size, selectDiv, colorDiv, bagButton, wishlist)
    maincontainer.append(div)



}




// back to detail button

let back = document.getElementById("upper-heading")
back.addEventListener('click',()=>
{
    window.location.href='../flaky-touch-8976/product_page.html'

})
