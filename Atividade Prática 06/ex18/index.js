/*
18. Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:
a vista desconto de 2.5% sobre o preco da tabela
de 2 ate 5 vezes preco da tabela sem desconto ou acrecimo
de 6 ate 10 vezes juros de 6% sobre o preco da tabela
de 11 a 15 vezes juros de 13% sobre o preco da tabela

Escreva um algoritmo que armazene o preço de tabela e o número
de vezes em que o pagamento será feito. Calcule o valor de cada
parcela e o preço total da compra e imprima no console.
*/

let precoTabela = parseFloat(prompt("Digite o preço de tabela do produto:"));
let numeroParcelas = parseInt(
  prompt("Digite o número de vezes para o pagamento:")
);

if (numeroParcelas < 1 || numeroParcelas > 15) {
  console.log(
    "Número de parcelas inválido. Por favor, insira um valor entre 1 e 15."
  );
} else {
  let precoFinal;
  let valorParcela;

  if (numeroParcelas === 1) {
    precoFinal = precoTabela * (1 - 0.025);
  } else if (numeroParcelas <= 5) {
    precoFinal = precoTabela;
  } else if (numeroParcelas <= 10) {
    precoFinal = precoTabela * (1 + 0.06);
  } else {
    precoFinal = precoTabela * (1 + 0.13);
  }

  valorParcela = precoFinal / numeroParcelas;
  console.log("O preço total da compra é: R$" + precoFinal.toFixed(2));
  console.log("O valor de cada parcela é: R$" + valorParcela.toFixed(2));
}
