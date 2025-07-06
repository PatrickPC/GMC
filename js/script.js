let header =document.querySelector('.header');
let navbar =document.querySelector('.header .flex .navbar');
let menuBtn =document.querySelector('#menu-btn');


menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}

window.onscroll = () =>{
    menuBtn.classList.remove('fa-xmark');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        header.classList.add('active');

    }else{
        header.classList.remove('active');
    }
}