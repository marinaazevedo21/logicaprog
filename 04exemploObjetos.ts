//declarando um objeto chamado aluno EM TYPESCRIPT         //aluno é objeto, não variavel
let aluno : {nome: string; idade: number; ativo: boolean} = {          
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