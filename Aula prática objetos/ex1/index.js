/*
    Crie dois objetos contendo as seguintes propriedades e realize os itens : 

    * Nome do objeto 
    * Preco do objeto 
    * Preco após desconto
    * Insira esses objetos em uma lista de produtos 
    
    a-) Imprima a média do preço do objeto 
    b-) Imprima a média de preço após desconto 
    c-) Crie um novo produto a partir do segundo produto, com nova média e valores
    d-)Insira os 3 produtos em uma lista de produtos
    e-) Se a média de preço é menor que 50, imprimir "Estamos com desconto, acesse nosso site"
    f-) Imprima o nome todos os itens da lista de produto


*/

let teclado = {
  nome: "mxkeys",
  preco: 720,
  precoaposdesconto: 700,
};

let mouse = {
  nome: "g502",
  preco: 250,
  precoaposdesconto: 230,
};

let listaDeProdutos = [teclado, mouse];

let mediaPreco = (teclado.preco + mouse.preco) / listaDeProdutos.length;
let mediaPrecoDesconto =
  (teclado.precoaposdesconto + mouse.precoaposdesconto) /
  listaDeProdutos.length;

//Tarefa A
console.log(`A média do preço do objeto é: R$ ${mediaPreco}`);

//Tarefa B
console.log(`A média de preço após desconto é: R$ ${mediaPrecoDesconto}`);

//Tarefa C
let monitor = {
  ...mouse,
  nome: "ultrawide",
  preco: mouse.preco * 1.5,
  precoaposdesconto: mouse.precoaposdesconto * 1.5,
};

listaDeProdutos.push(monitor); // Adiciona o novo objeto à lista

//Tarefa D
listaDeProdutos.push(monitor);

//Tarefa E
if (mediaPreco < 50) {
  console.log("Estamos com desconto, acesse nosso site");
}

//Tarefa F
listaDeProdutos.forEach((produto) => {
  console.log(produto.nome);
});
