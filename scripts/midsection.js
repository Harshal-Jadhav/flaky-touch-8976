var moviesCollection=[{
    poster:"https://n.nordstrommedia.com/id/ab05b3b4-6ee2-4082-aec0-7de2f981aa62.jpeg?h=522&w=804",
    },
    {
        poster:"https://n.nordstrommedia.com/id/634a977f-bd42-45ca-8555-c72e534f450f.jpeg?h=522&w=804",
    },
    {
        poster:"https://n.nordstrommedia.com/id/6ec52a9e-7a8d-4034-a192-6addaad61cd9.jpeg?h=522&w=804",
    }
]



function slideshow(){
    let i=0;
    let slideshowdiv=document.getElementById("slideshow-1");
    let imgg=document.createElement("img");
    imgg.src=moviesCollection[i].poster;
    slideshowdiv.append(imgg);

    i=i+1;
    setInterval(function(){
        if(i ==moviesCollection.length)
        {
            i=0;
        }
        slideshowdiv.innerHTML=null;
        let image=moviesCollection[i].poster;

        let img=document.createElement("img");

        img.src=image;
        slideshowdiv.append(img);
        i++;

    },3000);
};
slideshow();



const swiper = new Swiper('.swiper', {
   
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
  })
  

