/*
Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto

b. Mulheres ganham 13% de desconto
*/

let nome = prompt("Digite seu nome:");
let sexo = prompt("Digite seu sexo (M para masculino, F para feminino):");
let valorCompras = parseFloat(prompt("Digite o valor das suas compras:"));

let desconto;
if (sexo.toUpperCase() === "M") {
  desconto = valorCompras * 0.05;
} else if (sexo.toUpperCase() === "F") {
  desconto = valorCompras * 0.13;
} else {
  desconto = 0;
}

let valorFinal = valorCompras - desconto;
alert(
  "Cliente: " +
    nome +
    "\nValor original: R$" +
    valorCompras.toFixed(2) +
    "\nDesconto: R$" +
    desconto.toFixed(2) +
    "\nValor com desconto: R$" +
    valorFinal.toFixed(2)
);
