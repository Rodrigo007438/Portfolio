console.log("ESTA FUNCIONANDO");


const titulo = document.querySelector("h1");


titulo.addEventListener('click', () => {
    console.log("Clicou no titulo");
    titulo.textContent = "Você clicou!";
});







const nav = document.querySelector('nav');
const placeholder = document.querySelector('#nav-placeholder'); 


const navHeight = nav.offsetHeight; 
const navOffsetTop = nav.offsetTop; 


function fixNav() {
    if (window.scrollY >= navOffsetTop) {



        nav.classList.add('nav-sticky');
        
        
        placeholder.style.height = navHeight + 'px';

    } else {
       
        nav.classList.remove('nav-sticky');
        
       
        placeholder.style.height = 0;
    }
}


window.addEventListener('scroll', fixNav);


const profilePic = document.querySelector("#profile-pic"); 
const modalOverlay = document.querySelector("#modal-overlay");  
const bigModalImage = document.querySelector("#modal-image");  



if (profilePic) {
    profilePic.addEventListener('click', () => {
        if (modalOverlay) {
            modalOverlay.classList.remove('modal-hidden');
        }
    });
}


if (modalOverlay) {
    modalOverlay.addEventListener('click', () => {
        modalOverlay.classList.add('modal-hidden');
    });
}

