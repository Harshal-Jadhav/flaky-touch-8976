document.querySelector('#prcheck').addEventListener('click',toggle)

function toggle(){
    let x = document.querySelector('#promocode')
    if(x.style.display=='flex'){
        x.style.display='none'
    }else{
        x.style.display='flex'
    }
}