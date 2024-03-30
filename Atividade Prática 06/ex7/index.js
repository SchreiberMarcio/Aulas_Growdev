/*
Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100.
*/

let soma = 0;
let numero = 10;

do {
  soma += numero;
  console.log("Soma atual: " + soma);
  numero++;
} while (numero <= 100);
