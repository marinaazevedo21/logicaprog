//Desenvolver um programa que pergunte dois valores numéricos inteiros e apresente o valor da diferença entre o
//maior valor e o menor valor lido.

let num1, num2, diferença1, diferença2;

console.log("Informe o primeiro número: ");
num1 = 8
console.log(`Valor inserido: ${num1}`);

console.log("Informe o segundo número: ");
num2 = 10
console.log(`Valor inserido: ${num2}`);

diferença1 = num2 - num1
diferença2 = num1 - num2 

if ( num1 > num2 ) {
    console.log(`A diferença entre os valores inseridos é: ${diferença2}`);
}
    else {
        console.log(`A diferença entre os valores inseridos é: ${diferença1}`);
    }

