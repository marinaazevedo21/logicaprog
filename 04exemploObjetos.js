//declarando um objeto chamado aluno          //aluno é objeto, não variavel
let aluno = {                                 //as variáveis são as chaves
    nome: "João",    
    idade: 20,
    ativo: true
};
console.log(aluno);  //exibe o objeto completo
console.log(`Nome do aluno: ${aluno.nome}`); // exibe só o nome, personalizando
console.log(`Idade: ${aluno.idade}`);

if( aluno.ativo) { //ou poderia ser (aluno.ativo === true), ou se for falso coloca !aluno.ativo
    console.log("Situação: Ativo");
}else{
    console.log("Situação: Inativo");
}

//exemplo notação de Conchetes
let propriedade = "nome";

console.log(aluno[propriedade]); // João

//Também funciona diretamente
console.log(aluno["idade"]); //20


//Declarando novo OBJETO 
let produto = {
    nome: "Notebook",
    preco: 3000
};
console.log(produto);
//modificando o preço do notebook
produto.preco = 2800;
console.log(produto);  //o preço aparece duas vezes por que só mudou o valor depois de já ter feito um valor antes


//ADICIONAR UMA NOVA PROPRIEDADE (UMA NOVA CHAVE)
produto.estoque = 15;
console.log(produto);

