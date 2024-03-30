let numero = parseFloat(prompt("Digite um número:"));

let ePar = (numero % 2 === 0);
let eImpar = (numero % 2 !== 0);
let maiorQueDez = (numero > 10);
let maiorOuIgualADez = (numero >= 10);
let menorQueDez = (numero < 10);
let menorOuIgualADez = (numero <= 10);

console.log("O número é par? " + ePar);
console.log("O número é ímpar? " + eImpar);
console.log("O número é maior que 10? " + maiorQueDez);
console.log("O número é maior ou igual a 10? " + maiorOuIgualADez);
console.log("O número é menor que 10? " + menorQueDez);
console.log("O número é menor ou igual a 10? " + menorOuIgualADez);
