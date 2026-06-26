//Crie 2 vetores chamados nome e profissao, cada um com 5 elementos. Pergunte ao usuário o nome e a profissão
//de 5 pessoas e preencha estes vetores. Ao final exiba um relatório apontando o nome e a profissão de cada uma
//das 5 pessoas cadastradas.

let nome = ["Ana", "Maria" , "Luisa" , "Julia", "Marcos"];
let profissao = ["Juiza", "Médica", "Pediatra","Policial", "Veterinária"];

for(let cont = 0; cont <5; cont ++){
    console.log(`Nomes: ${nome[cont]} - Profissão: ${profissao[cont]}`);
}
