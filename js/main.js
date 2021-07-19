let order = [];
let clickedOrder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

/*Buscando classes no html para aplicar... */
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

/*Cria ordem aleatória de cores*/
let shuffleOrder = () => {
    let ColorOrder = Math.floor(Math.random() * 4);
    order[order.length] = ColorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


/*...  estilo selected no css
- Acende a prósima cor*/
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        /*ativando...*/
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        /*... e removendo*/
        element.classList.remove('selected');
    });
}

//Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}


//Função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

//Função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

//Função para próximo nível de jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

//Função de início do jogo
let playGame = () => {
    alert('Bem vindo(a) ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//Seleciona código da cor no clique
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => (2);
blue.onclick = () => (3);

playGame();
