let numeroSecreto; // O número que o jogador precisa adivinhar
let contadordeChances = 1; // Começa na primeira chance
const MAX_CHANCES = 10; // Número máximo de chances

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarPalpite = document.querySelector('#botaoEnviarPalpite');
const botaoReiniciar = document.querySelector('#botaoReiniciar');

const mensagemElement = document.querySelector('.mensagem');
const palpitesAnterioresElement = document.querySelector('.palpites-anteriores');
const chancesRestantesElement = document.querySelector('#chancesRestante');
const dicaElement = document.querySelector('.dica');

let listdepalpites = []; // Array para guardar os palpites que o jogador ja deu

function iniciarjogo() {
    // Gerar um novo número secreto (ebtre 1 e 100)
    // Math.random() gera um número entre 0 (inclusive) e 1 (exclusive)
    // Mutiplicamos por 100 para ter entre 0 99.99...
    // Adicionamos 1 para ter entre 100.99...
    // Math.floor () arredonda para um menor inteiro , então teremos entre 1 e 100
    numeroSecreto = Math.floor(Math.random()* 100) +1;
    console.log('Número secreto(apenas para test):',
        Númerosecreto); // Ajuda no debug!

    contadordeChances = 1 //resetar o contador de chances
    chancesRestantesElement.textContent = MAX_CHANCES; //mostra o total de chaves
    
    //limpar as menssagem anteriores
    mensagemElement.textContent = '';
    palpitesAnterioresElement.textContent = '';
    dicaElement.textContent = '';
    listdepalpites = []; //limpa a lista de palpites

    //resetar as cores das mensagens 
    mensagemElement.Style.color = #f0f0f0; //cor padrão do texto 
    dicaElement.Style.color = #ffeb3b; // cor padrão da dica

    campoPalpite.Disabled = false;// Reativar o campo de palpite e o botão de enviar
    botaoEnviarPalpite.Disabled = false;
    campoPalpite.value = ''; //limpo o campo de entrada
    campoPalpite.focus(); //coloca o curso no campo para o usuário digitar

    botaoReiniciar.classList.add('hidden') //esconder o botão de reiniar
}

