
const botaoTrailer = document.querySelector(
    '.conteudo-destaque .botao'
);

const secaoTrailer = document.getElementById('trailer');

botaoTrailer.addEventListener('click', function (evento) {
    evento.preventDefault();

    secaoTrailer.scrollIntoView({
        behavior: 'smooth'
    });
});
