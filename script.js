console.log("ESTA FUNCIONANDO");

//selecioanndo o H1
const titulo = document.querySelector("h1");

//quando clicar no titulo uma função anonima vai acontecer
titulo.addEventListener('click', () => {
    console.log("Clicou no titulo");
    titulo.textContent = "Você clicou!";
});

/*selecionando formulário*/
const formContato = document.querySelector('form');

/*recebendo parametro event*/
formContato.addEventListener('submit', (event) => {

    /*impede o carregamento*/
    event.preventDefault();

    /*selecionando campode input*/
    const inputNome = document.querySelector('#nome');
    const inputEmail = document.querySelector('#email');
    const inputMensagem = document.querySelector('#mensagem');

    /*pega o valor(value) de cada campo*/
    const nome = inputNome.value;
    const email = inputEmail.value;
    const mensagem = inputMensagem.value;

    /*mostra od dados do formmulario na tela*/
    console.log("---DADOS DO FOUMÁRIO---");
    console.log("Nome do Usuário:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);

    /*Avisa sobre envio*/
    alert("MENSAGEM ENVIADA COM SUCESSO!!");
    
    inputNome.value ="";
    inputEmail.value ="";
    inputMensagem.value ="";
})

// 1. Seleciona os elementos
const nav = document.querySelector('nav');
const placeholder = document.querySelector('#nav-placeholder'); // Seleciona o placeholder

// 2. Guarda as medidas (só precisa ser feito uma vez)
const navHeight = nav.offsetHeight; // (Corrigi seu 'navHeigth' para 'navHeight')
const navOffsetTop = nav.offsetTop; // (Corrigi seu 'navOffSetTop' para 'navOffsetTop')

// 3. função rolagem
function fixNav() {
    if (window.scrollY >= navOffsetTop) {
        // Se a rolagem passou do menu...

        // 1. Gruda o menu
        nav.classList.add('nav-sticky');
        
        // 2. Ativa o placeholder com a altura exata do menu
        //    (Isto evita o 'pulo' do conteúdo)
        placeholder.style.height = navHeight + 'px';

    } else {
        // Se a rolagem voltou para o topo...

        // 1. Solta o menu
        nav.classList.remove('nav-sticky');
        
        // 2. Desativa o placeholder
        placeholder.style.height = 0;
    }
}

// 4. "Ouve" o evento de scroll
window.addEventListener('scroll', fixNav);