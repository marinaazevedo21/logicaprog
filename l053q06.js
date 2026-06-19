//Desenvolver um programa que apresente o valor de uma potência de uma base qualquer elevada a um expoente
//qualquer, ou seja, de be, onde os valores de b e e são fornecidos pelo usuário, sem utilizar Math.pow().

let base;
let exp;
let acum = 1; // o acum começa a valer 1 quando for multiplicar, soma começa com 0

console.log("Informe o valor da basa da potência: ")
base = 2;
console.log("Informe o valor do expoente: ")
exp = 4;
console.log(`Valores inseridos: Base: ${base}, Expoente: ${exp}`);

for (let cont = 1; cont <= exp; cont ++){
acum = acum * base;
}

console.log(`${base} elevado a ${exp} = ${acum}`)