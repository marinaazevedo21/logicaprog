//Fazer um algoritmo que pergunte 3 números e apresente a média aritmética entre estes 3 números.

let num1, num2, num3, media;

console.log("Informe um número: ");
num1 = 2;
console.log("Informe um número: ");
num2 = 5;
console.log("Informe um número: ");
num3 = 7;


media = (num1 + num2 + num3) / 3;
console.log(`A média desses números é ${media.toFixed(2)}`);