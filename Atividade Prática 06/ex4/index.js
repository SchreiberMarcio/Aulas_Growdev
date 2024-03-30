/*
Reescreva o exercício 3, utilizando apenas o SWITCH.
*/

let numero = prompt(
  "Por favor, insira um número de 1 a 7 para saber o dia da semana correspondente:"
);

switch (parseInt(numero, 10)) {
  case 1:
    document.write("Domingo");
    break;
  case 2:
    document.write("Segunda-feira");
    break;
  case 3:
    document.write("Terça-feira");
    break;
  case 4:
    document.write("Quarta-feira");
    break;
  case 5:
    document.write("Quinta-feira");
    break;
  case 6:
    document.write("Sexta-feira");
    break;
  case 7:
    document.write("Sábado");
    break;
  default:
    document.write("Número inválido. Por favor, insira um número de 1 a 7.");
}
