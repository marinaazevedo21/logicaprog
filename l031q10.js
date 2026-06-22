//Fazer um algoritmo que efetue o cálculo do valor de uma prestação em atraso, utilizando a fórmula prestação =
//valor + (valor x (taxa : 100) x tempo em dias).

let valor, taxa, tempo, prestacao;

console.log("Informe o valor: ");
valor = 200;

console.log("Informe a taxa: ");
taxa = 2;

console.log("Informe o tempo: ");
tempo = 5;

prestacao = valor + (valor * (taxa / 100) * tempo);
console.log(`O valor da prestação em atraso é de: ${prestacao}`);