//Desenvolver um programa que apresente os resultados de uma tabuada de um número n qualquer a ser
//perguntado ao usuário (n x 1, n x 2, n x 3, ... , n x 9, n x 10)

let cont = 1;
let n, mult;

console.log("Digite um número: ");
n = 6;
console.log(`O número informado foi: ${n}`);

do{
    mult = n * cont;
console.log(`${n} x ${cont} = ${mult}`);

    cont = cont + 1;// ou cont +=1, ou cont ++  só se for 1 esse último
}while(cont<=10);