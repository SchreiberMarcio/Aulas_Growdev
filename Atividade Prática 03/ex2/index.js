/*
Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.
*/

let alturaPedro = 170;
let alturaLucas = 110;
const taxadeCrescimentoPedro = 2;
const taxadeCrescimentoLucas = 3;
let anosParaTamanhoIgual = 0;
let anosparaLucasSerMaior = 0;

while (alturaLucas <= alturaPedro) {
    alturaPedro += taxadeCrescimentoPedro;
    alturaLucas += taxadeCrescimentoLucas;
    anosParaTamanhoIgual++;
}

alturaPedro = 170;
alturaLucas = 110;

while (alturaLucas <= alturaPedro) {
    alturaPedro += taxadeCrescimentoPedro;
    alturaLucas += taxadeCrescimentoLucas;
    anosparaLucasSerMaior++;
}

console.log(`A quantidade de anos necessários para que Lucas seja maior que Pedro é de ${anosparaLucasSerMaior}`);
console.log(`A quantidade de anos necessários para que Lucas e Pedro terem a mesma altura: ${anosParaTamanhoIgual}`)