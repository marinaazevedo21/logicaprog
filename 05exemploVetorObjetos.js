//material 07 - página 16

//Declarando um VETOR (ou array) de OBJETOS "aluno"

let alunos = [                          //cada gaveta é um aluno, e tudo está guardado
    {nome: "Ana", idade: 18, ativo: true},
    {nome: "Carlos", idade: 22, ativo: false},
    {nome: "Maria", idade: 20, ativo: true}
];
console.log(alunos);

//Acessando pelo índice + propriedade
console.log(`Nome do primeiro aluno(a): ${alunos[0].nome}`); //começa com 0

console.log(alunos[0]); //pra ver tudo da ana

//Percorrendo o Vetor de Objetos com FOR clássico
for (let cont = 0; cont < alunos.length; cont ++){
    console.log(`Nome: ${alunos[cont].nome}`);
    console.log(`Idade: ${alunos[cont].idade}`);
    console.log(`Ativo: ${alunos[cont].ativo} \n`);  //quando dar \n (contra barra n) é uma quebra de linha, que quando estou no console log o computador entende que pula uma linha
                                                       
}

//Percorrendo o Vetor de Objetos com o FOR OF
for (let aluno of alunos){              //let aluno é objeto, isola só um dos "gaveteiros"
     console.log(`Nome: ${aluno.nome}`);
     console.log(`Idade: ${aluno.idade}`);
     console.log(`Ativo: ${aluno.ativo}\n`);
}



