
/*Código 1: 
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    contador = contador + 1;
}
*/

//Código 2:
/*
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}*/

// Função responsável por tocar o som associado ao seletor de áudio
function tocaSom(seletorAudio) {
    // Seleciona o elemento de áudio com base no seletor fornecido
    const elemento = document.querySelector(seletorAudio);

    // Verifica se o elemento existe e se é do tipo <audio>
    if (elemento && elemento.localName === 'audio') {
        // Reproduz o som
        elemento.play();
    } else {
        // Caso o elemento não seja encontrado ou o seletor seja inválido, exibe uma mensagem de erro no console
        console.log('elemento não encontrado ou seletor inválido');
    }
}

// Seleciona todos os elementos com a classe .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

// Loop que percorre todas as teclas na lista
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    // Armazena a tecla atual na variável 'tecla'
    const tecla = listaDeTeclas[contador];

    // Extrai o nome do instrumento a partir da segunda classe da tecla
    const instrumento = tecla.classList[1];

    // Cria o seletor de ID do áudio correspondente ao instrumento
    const idAudio = `#som_${instrumento}`;

    // Associa uma função ao evento de clique na tecla
    tecla.onclick = function () {
        // Chama a função 'tocaSom' passando o seletor do áudio correspondente
        tocaSom(idAudio);
    }

    // Associa uma função ao evento de pressionar uma tecla no teclado
    tecla.onkeydown = function(evento) {
        // Verifica se a tecla pressionada é 'Space' ou 'Enter'
        if (evento.code === 'Space' || evento.code === 'Enter') {
            // Adiciona a classe 'ativa' à tecla para aplicar um efeito visual
            tecla.classList.add("ativa");
        }
    }

    // Associa uma função ao evento de soltar uma tecla no teclado
    tecla.onkeyup = function() {
        // Remove a classe 'ativa' da tecla para remover o efeito visual
        tecla.classList.remove('ativa');
    }
}
