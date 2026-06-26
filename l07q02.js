//Desenvolver um programa que pergunte cinco elementos de um vetor a. No final, apresente a soma de todos os
//elementos deste vetor.

let a = [2, 5, 6, 10, 8];
let acum = 0;

for(let cont = 0; cont <5; cont ++){
    soma = a[cont];
    acum = acum + soma; 

}
console.log(`A soma dos 5 números é: ${acum}`);