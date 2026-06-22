//Desenvolver um programa que pergunte um número de 1 a 12, e responda o mês correspondente ao número,
//ou se o número não corresponde a nenhum dos 12 meses.

let mes;

console.log("1 - Janeiro");
console.log("2 - Fevereiro");
console.log("3 - Março");
console.log("4 - Abril");
console.log("5 - Maio");
console.log("6 - Junho");
console.log("7 - Julho");
console.log("8 - Agosto");
console.log("9 - Setembro");
console.log("10 - Outubro");
console.log("11 - Novembro");
console.log("12 - Dezembro");

console.log("Informe o número referente à ação desejada: ");
mes = 9;

switch( mes ) {
    case 1:
        console.log("Você selecionou: 1 - Janeiro");
        break;
    case 2:
        console.log("Você selecionou: 2 - Fevereiro");
        break;
    case 3:
        console.log("Você selecionou: 3 - Março");
        break;
    case 4:
        console.log("Você selecionou: 4 - Abril");
        break;
    case 5:
        console.log("Você selecionou: 5 - Maio");
        break;
    case 6:
        console.log("Você selecionou: 6 - Junho");
        break;
      case 7:
        console.log("Você selecionou: 7 - Julho");
        break;   
    case 8:
        console.log("Você selecionou: 8 - Agosto");
        break;  
      case 9:
        console.log("Você selecionou: 9 - Setembro");
        break;   
     case 10:
        console.log("Você selecionou: 10 - Outubro");
        break;  
    case 11:
        console.log("Você selecionou: 11 - Novembro");
        break;  
    case 12:
        console.log("Você selecionou: 12 - Dezembro");
        break;   
    default:
         console.log("ERRO: Código informado não é válido");
        break;
}

