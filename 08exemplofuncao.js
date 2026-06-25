//material 08(Modularização e Funções) - página 06

//variável GLOBAL
let num;         //a variável só funciona fora das chaves, se estiver dentro da chave ela só funciona local.

function somar(a, b){  //A VARIAVEL A E B SÃO LOCAIS
    let resultado = a + b; //resultado é uma variável LOCAL
    return resultado;
}
//exibindo imediatamente o valor retornável pela função
console.log(somar(5,3));


//guardando o valor retornado em uma variável
num = somar(10, 20);
console.log(num);

somar(4, 5);  //não deu certo pois não tinha lugar para colocar a resposta, o retorno da função se perde
//função void - função sem retorno
function direcionador(){
    console.log("Siga em frente! Estude sempre!");
}
//chamando a função direcionador()
direcionador(); //APARECE A MENSAGEM


function mensagem(){
    return "Ame mais, brigue menos!";
}
//chamando a função mensagem()
mensagem(); //TA ERRADO - PERDI O RETORNO DA FUNÇÃO
console.log(mensagem());


function tudao(){
    console.log("Início da função tudao()");
    direcionador(); //chamando função direcionador
    let calc = somar(2, 3);
    console.log(`Resultado da soma: ${calc}`);
    let msg = mensagem();
    direcionador();
    console.log(`Mensagem do dia: ${msg}`);
    console.log("Fim da função tudao()");
}
tudao(); //chamando a função tudao()
