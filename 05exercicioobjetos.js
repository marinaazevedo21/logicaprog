let produtos = [
    {nome: "Notebook", preco: 2800.00},
    {nome: "Mouse", preco: 75.00},
    {nome: "Teclado", preco: 128.00}
];
 //primeiro e ultimo produto
console.log(`Primeiro produto: ${produtos[0]}`);
console.log(`Último produto: ${produtos[2]}`);

//percorrer a lista com for of
for (let produto of produtos){
    console.log(`Produto: ${produto.nome} | Preço: ${produto.preco.toFixed(2)}`);
}
//modifique o preço do segundo produto
produtos[1].preco = 89.99
console.log(produtos);

