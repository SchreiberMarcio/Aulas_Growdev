/*
Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
um certo número inteiro de GrowCoins.
Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
desejado pelo cliente, determine o número de cada uma das notas
necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

Exemplo de entrada:
72
Exemplo de saída:
GC$ 50,00 -> 1

GC$ 10,00 -> 2
GC$ 5,00 -> 0
GC$ 1,00 -> 2
*/

let valorDesejado = parseInt(prompt("Digite o valor desejado:")) 
let notas = [50, 10, 5, 1];
let resultado = {};

for (let i = 0; i < notas.length; i++) {
  let nota = notas[i];
  resultado[nota] = 0;
  while (valorDesejado >= nota) {
    resultado[nota]++;
    valorDesejado -= nota;
  }
}

document.write("GC$ 50,00 -> " + resultado["50"]);
document.write("<br>GC$ 10,00 -> " + resultado["10"]);
document.write("<br>GC$ 5,00 -> " + resultado["5"]);
document.write("<br>GC$ 1,00 -> " + resultado["1"]);


/*let growCoins = 72;
let notas = [50, 10, 5, 1];
let resultado = '';

for (let i = 0; i < notas.length; i++) {
    let quantidade = growCoins / notas[i];
    
    if (quantidade >= 1) {
        quantidade = parseInt(quantidade);
        resultado += `GC$ ${notas[i]},00 -> ${quantidade}\n`;
        growCoins = growCoins % notas[i];
    }
}

console.log(resultado);*/
