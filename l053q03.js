//Desenvolver um programa que apresente os resultados de uma tabuada de um número qualquer informado
//pelo usuário.

let n;
let mult;

console.log("Informe um número: ");
n=2;
console.log(`O número que você digitou foi: ${n}`);

for (let cont = 1; cont <=10; cont ++) {
mult = 2 * cont;
    console.log(`${n} x ${cont} ${mult}`);
}