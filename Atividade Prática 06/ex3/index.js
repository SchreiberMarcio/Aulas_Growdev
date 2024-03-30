/*
 Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”. 
*/

let numero = prompt("Digite um número de 1 a 7 para saber o dia da semana:");

if (numero === '1') {
  console.log("Domingo");
} else if (numero === '2') {
  console.log("Segunda-feira");
} else if (numero === '3') {
  console.log("Terça-feira");
} else if (numero === '4') {
  console.log("Quarta-feira");
} else if (numero === '5') {
  console.log("Quinta-feira");
} else if (numero === '6') {
  console.log("Sexta-feira");
} else if (numero === '7') {
  console.log("Sábado");
} else {
  console.log("Dia não reconhecido");
}
