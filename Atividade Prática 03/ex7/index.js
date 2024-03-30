/*
Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.
*/

let numeros = [10, 15, 18, -3, 21, 65, 32, 46, 51, 32];
let soma = 0;
let quantidadeDePositivos = 0;
let quantidadeDeNegativos = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
  if (numeros[i] > 0) {
    quantidadeDePositivos++;
  } else if (numeros[i] < 0) {
    quantidadeDeNegativos++;
  }
}

let media = soma / numeros.length;

let percentualPositivos = (quantidadeDePositivos / numeros.length) * 100;
let percentualNegativos = (quantidadeDeNegativos / numeros.length) * 100;

console.log("Média Aritmética: " + media);
console.log("Quantidade de Valores Positivos: " + quantidadeDePositivos);
console.log("Quantidade de Valores Negativos: " + quantidadeDeNegativos);
console.log("Percentual de Valores Positivos: " + percentualPositivos + "%");
console.log("Percentual de Valores Negativos: " + percentualNegativos + "%");
