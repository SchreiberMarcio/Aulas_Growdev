/*
Informe um valor a uma variável e imprima no console se o número
é primo.
*/


var numero = parseInt(prompt("Digite um número:"));
var divisores = 0;

for (var count = 1; count <= numero; count++) {
  if (numero % count == 0) {
    divisores++;
  }
}

if (divisores == 2) {
  console.log(`${numero} é primo`);
} else {
  console.log(`${numero} não é primo`);
}
