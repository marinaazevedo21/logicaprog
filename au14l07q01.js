//Crie um objeto aluno Com as propriedades: nome (string), idade (number) e matriculado 
// (boolean). Use seus próprios dados!
//Acesse e exiba cada propriedade Use console.log para exibir cada valor separadamente usando a notação de ponto.
//Modifique uma propriedade Altere o valor de idade para um número diferente e exiba o novo
//valor no console.

let aluno = {
    nome: "Marina",
    idade: 20,
    matriculado: true
};
console.log(`Nome do aluno(a): ${aluno.nome}`);
console.log(`Idade do aluno(a): ${aluno.idade}`);

if(aluno.matriculado){
    console.log("Situação: Matriculado");
}else{
    console.log("Situação: Não matriculado");
}

aluno.idade = 22;
console.log(aluno);