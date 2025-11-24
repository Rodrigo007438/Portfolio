console.log("ESTA FUNCIONANDO");


const titulo = document.querySelector("h1");


titulo.addEventListener('click', () => {
    console.log("Clicou no titulo");
    titulo.textContent = "Você clicou!";
});



const form = document.getElementById("meu_form");

async function handleSubmit(event) {
    event.preventDefault(); 
    const status = document.getElementById("meu_form-status");
    const data = new FormData(event.target);

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
          
            alert("Obrigado! Sua mensagem foi enviada com sucesso.");
            form.reset(); 
        } else {
           
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert("Oops! Ocorreu um erro ao enviar o formulário.");
                }
            })
        }
    }).catch(error => {
        alert("Oops! Ocorreu um erro ao enviar o formulário.");
    });
}

form.addEventListener("submit", handleSubmit);



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

