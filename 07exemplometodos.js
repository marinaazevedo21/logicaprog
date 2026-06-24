class Pessoa{                                     
    nome;
    idade;

   //MÉTODO CONSTRUTOR (AJUDA A CRIAR OS OBJETOS)      
    constructor(nome, idade){
        this.nome = nome; //a variavel do nome recebe nome
        this.idade = idade;
    }

    //método comum
    apresentar() {
        console.log(`Olá! meu nome é ${this.nome}!`);
 
    }

} //fim da classe Pessoa

//instanciando objeto usando o construtor
let pessoa1 = new Pessoa("Roberto", 33);
console.log(pessoa1);

pessoa1.apresentar(); //chamando o método apresentar da classe pessoa