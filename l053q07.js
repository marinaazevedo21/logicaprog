//Desenvolver um programa que apresente no final a soma dos valores pares existentes na faixa de 3 até 21.

let cont = 3;
let acum = 0;

for(let cont = 3; cont <=21; cont = cont + 1){
    if( cont % 2 ===0){
        acum = acum + cont;

    }
}
     console.log(`A soma dos valores pares é ${acum}`);  
    