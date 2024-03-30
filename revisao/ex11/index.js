/*
Escreva um programa que solicite um número, utilizando WHILE multiplique este número por 3 
enquanto a soma seja menor que 500 e no final mostre qual o último valor.”


*/

let numero = parseFloat(prompt("Digite um número:"));
let soma = 0;

while (soma < 500) {
  numero *= 3;
  soma += numero;
  console.log(soma);
}

console.log("O último valor antes de a soma exceder 500 é: " + soma);
