
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