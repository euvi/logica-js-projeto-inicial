alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 30');

//comparando o chute com o numeroSecreto
if(chute == numeroSecreto){
    console.log('Isso aí! Você descobriu o número secreto (5)');
} else{
    console.log('Você errou :( ');
}