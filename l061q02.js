/*Desenvolver um programa que pergunte o sexo da pessoa e dê como resposta a seguinte orientação de acordo
com o sexo informado: “Banheiro masculino à direita” ou “Banheiro feminino à esquerda”.*/

let sexo;
console.log("MASCULINO ");
console.log("FEMININO");

console.log("Informe o seu sexo: ");
sexo = "MASCULINO"

switch( sexo ) {
    case "MASCULINO" :
        console.log("Banheiro masculino à direita");
        break;
    case "FEMININO":
        console.log("Banheiro feminino à esquerda");
        break; }