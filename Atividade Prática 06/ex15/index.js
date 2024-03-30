/*
Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C);
*/

let A = parseFloat(prompt("Digite o valor do lado A:"));
let B = parseFloat(prompt("Digite o valor do lado B:"));
let C = parseFloat(prompt("Digite o valor do lado C:"));

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log("Triângulo equilátero: todos os lados são iguais.");
  } else if (A === B || A === C || B === C) {
    console.log("Triângulo isósceles: dois lados são iguais.");
  } else {
    console.log("Triângulo escaleno: todos os lados são diferentes.");
  }
} else {
  console.log("Os valores fornecidos não formam um triângulo.");
}
