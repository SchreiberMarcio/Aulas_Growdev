/*
Escreva um algoritmo que percorra os números inteiros entre 1 e 250
e verifique quais números são múltiplos de 3 e quais são múltiplos
de 5.
*/
for (let numero = 1; numero <= 250; numero++) {
    if (numero % 3 === 0) {
      console.log(numero + " é múltiplo de 3");
    }
    if (numero % 5 === 0) {
      console.log(numero + " é múltiplo de 5");
    }
  }
  