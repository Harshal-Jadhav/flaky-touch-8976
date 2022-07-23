let LSuserData = JSON.parse(localStorage.getItem("signupData")) || [];
let LSwishList = JSON.parse(localStorage.getItem("myWishList")) || [] ;

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

let append = (LSwishList) =>{
    let container = document.querySelector("#wishList-Body");
    container.innerHTML=null;
    LSwishList.forEach( (el,index) => {
        let img = document.createElement("img");
        img.src=el.frontImage;
        let anniversary = document.createElement('h4');
        anniversary.innerText='Anniversary Sale';
        anniversary.style.display='inline';
        anniversary.style.background='yellow';

        let titl = document.createElement("h5");
        titl.innerText=el.title;

        let des = document.createElement("p");
        des.innerText=el.description;

        let price = document.createElement("p");
        price.innerText="Sale:-"+el.sale;

        let offprice = document.createElement("p");
        offprice.innerText="After Sale:-"+el.AfterSalePrice;

        let color = document.createElement("p");
        color.innerText="Color:-"+el.color;

        let qty = document.createElement("p");
        qty.innerText="qty :"+el.qty;
        // 
        let imgD = document.createElement("div");
        imgD.setAttribute("class","item-img");
        imgD.append(img);

        let cDiv = document.createElement("div");
        cDiv.setAttribute("class","size");
        cDiv.append(qty,color);

        let pDiv = document.createElement("div");
        pDiv.setAttribute("class","price");
        pDiv.append(price,offprice);

        let btn = document.createElement("div");
        btn.setAttribute("class","bag-btn");
        // 
        let  bimDiv = document.createElement("div"); 
        let bimg = document.createElement("img");
        bimg.src="https://cdn-icons-png.flaticon.com/512/687/687259.png";
        bimDiv.append(bimg);
        // 
        let btex = document.createElement("div");
        btex.innerText="Add to Bag";
        btn.append(bimDiv,btex);
        btn.addEventListener("click",function()
        {
            addtoBag(el,btex);
        });

        let Ddiv = document.createElement("div");
        Ddiv.setAttribute("class","delete-btn");
        Ddiv.innerText="Delete";
        Ddiv.addEventListener("click",function()
        {
            itemDelete(index);
        });
        let textDiv = document.createElement("div");
        textDiv.setAttribute("class","textCon");

        let mainDiv = document.createElement("div");
        mainDiv.setAttribute("class","item");

        textDiv.append(anniversary,titl,des,cDiv,pDiv,btn,Ddiv)
        mainDiv.append(imgD,textDiv)

        container.append(mainDiv);

        
    });

}


let addtoBag = (el,btex) => {
    localStorage.setItem("myBag",JSON.stringify(el));
    btex.innerText="In your Bag";
}
let itemDelete = (index) =>{
    LSwishList.splice(index,1);
    localStorage.setItem("myWishList",JSON.stringify(LSwishList));
    window.location.reload();
}
append(LSwishList);
let sort =() => {
    let value = document.querySelector("#sorting").value; 
    if(value == "low to high" )
    {
        lowtohigh();
    }
    else if( value == "High to Low")
    {
        hightolow();
    }
    else 
    {
        window.location.reload();
    }
    
    
}

let lowtohigh = () =>{
    LSwishList.sort(function(a,b)
    {
        return +a.sale - +b.sale;
    })
    append(LSwishList)
}
let hightolow = () =>{
    LSwishList.sort(function(a,b)
    {
        return +b.sale - +a.sale;
    })
    append(LSwishList)
}
let data = () => {
    return append(LSuserData);
}