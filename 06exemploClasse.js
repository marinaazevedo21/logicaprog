// material 09 - página 11
// definindo uma CLASSE chamada Pessoa
//CLASSE - É O MODELO QUE DESCREVE COMO O OBJETO DEVE SER CONSTRUIDO
// OBJETO - SÃO OS ATRIBUTOS, CARACTERISTICAS QUE AS CLASSES VÃO TRABALHAR

class Pessoa{                                     //as classes começam com letra maiúscula
    nome;
    idade;
         
} //fim da classe Pessoa

//instanciando (criando) um objeto pessoa1 a partir da classe Pessoa
let pessoa1 = new Pessoa();

//atribuindo valores aos atributos do objeto pessoa1
pessoa1.nome = "João";
pessoa1.idade = 23;

console.log(pessoa1);

let pessoa2 = new Pessoa();
pessoa2.nome = "Ana";
pessoa2.idade = 30;

console.log(pessoa2);