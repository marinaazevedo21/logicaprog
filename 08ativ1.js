//Atividade Prática 1 — Funções Simples

//Crie uma função chamada apresentar que exiba no console a mensagem: "Bem-vindo ao curso de JavaScript!".
//  Chame a função ao final.

function apresentar(){
return "Bem-vindo ao curso de JavaScript!";
}
console.log(apresentar());

//OU
function apresentar(){
    console.log("Bem-vindo ao curso de JavaScript!");
}

//Tarefa B
//Crie uma função chamada exibirData que exiba a data atual no console usando new Date().toLocaleDateString().

function exibirData(){
    console.log(new Date().toLocaleDateString());
}
exibirData();
exibirData();
exibirData();