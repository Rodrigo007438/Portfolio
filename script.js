console.log("ESTÁ FUNCIONANDO");

// Clique no título
const titulo = document.querySelector("h1");
titulo.addEventListener("click", () => {
    console.log("Clicou no título");
    titulo.textContent = "Você clicou!";
});

// Formulário
const formContato = document.querySelector("form");
formContato.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#mensagem").value;

    console.log("---DADOS DO FORMULÁRIO---");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);

    alert("MENSAGEM ENVIADA COM SUCESSO!");

    document.querySelector("#nome").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#mensagem").value = "";
});

// Menu fixo
const nav = document.querySelector("nav");
const placeholder = document.querySelector("#nav-placeholder");
const navHeight = nav.offsetHeight;
const navOffsetTop = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= navOffsetTop) {
        nav.classList.add("nav-sticky");
        placeholder.style.height = navHeight + "px";
    } else {
        nav.classList.remove("nav-sticky");
        placeholder.style.height = 0;
    }
}
window.addEventListener("scroll", fixNav);

// Modal da foto
const profilePic = document.querySelector("#profile-pic");
const modalOverlay = document.querySelector("#modal-overlay");
const bigModalImage = document.querySelector("#modal-image");

// Abre o modal ao clicar na foto
if (profilePic) {
    profilePic.addEventListener("click", () => {
        modalOverlay.classList.remove("modal-hidden");
    });
}

// Fecha o modal ao clicar no fundo
if (modalOverlay) {
    modalOverlay.addEventListener("click", () => {
        modalOverlay.classList.add("modal-hidden");
    });
}

// Impede fechar ao clicar na imagem grande
if (bigModalImage) {
    bigModalImage.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}
