//Fazer um programa que pergunte o salário de um funcionário e apresente este salário com um aumento de 15%.

let salario, acrescimo, salFinal;

console.log("Informe o seu salário ");
salario = 1000.00;

acrescimo = salario * 15/100 ;

salFinal = salario + acrescimo;

console.log(`O seu novo salário é R$ ${salFinal.toFixed(2)}`);