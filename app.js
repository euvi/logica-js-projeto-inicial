alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute;
//comparando o chute com o numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto) {
            alert('O número secreto é menor que ' + chute);
        } else {
            alert('O número secreto é maior que ' + chute);
        }
    }
}
