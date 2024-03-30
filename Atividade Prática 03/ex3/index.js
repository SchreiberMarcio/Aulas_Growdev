/*
Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
*/

let n = parseInt(prompt("Digite o multiplicando:"));
let i = parseInt(prompt("Digite a quantidade de iterações:"));

for (let contador = 1; contador <= i; contador++) {
  console.log(contador + " * " + n + " = " + contador * n);
}
