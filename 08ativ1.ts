//Tarefa C — TypeScript
//Reescreva as funções A e B em TypeScript, adicionando a anotação de tipo : void no retorno. 
// Observe a diferença sintática.

//Crie uma função chamada apresentar que exiba no console a mensagem: "Bem-vindo ao curso de JavaScript!".
//  Chame a função ao final.

function apresentar(): void{
console.log ("Bem-vindo ao curso de JavaScript!");
}
apresentar();


//Tarefa B
//Crie uma função chamada exibirData que exiba a data atual no console usando new Date().toLocaleDateString().

function exibirData(): void{
    console.log(new Date().toLocaleDateString());
}
exibirData();
exibirData();
exibirData();