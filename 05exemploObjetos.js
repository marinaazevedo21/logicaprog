//exercício material 07 - página 14 - Criando seu Primeiro Objeto

// item 1
let aluno = {                               
    nome: "Marina",    
    idade: 20,
    matriculado: true
};
//item 2
console.log(aluno);
console.log(`Nome do aluno(a): ${aluno.nome}`);
console.log(`Idade do aluno(a): ${aluno.idade}`);

if (aluno.matriculado){
console.log("Situação: Matriculado(a)");
}else{
    console.log("Situação: Não Matriculado(a)");
}
//item 3 - modificando a idade
aluno.idade = 21;
console.log(aluno);