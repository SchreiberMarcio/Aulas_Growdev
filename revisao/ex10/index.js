/*
Escreva um programa que solicite ao usuário que insira o nome de uma forma geométrica (quadrado, triângulo ou retângulo) e calcule sua área. O programa deve utilizar a estrutura de controle switch case para identificar a forma geométrica inserida pelo usuário e calcular sua área com base nas informações adicionais fornecidas.

Se o usuário inserir “quadrado”, o programa deve solicitar o comprimento do lado do quadrado e calcular sua área usando a fórmula: área = lado * lado.
Se o usuário inserir “triângulo”, o programa deve solicitar a base e a altura do triângulo e calcular sua área usando a fórmula: área = (base * altura) / 2.
Se o usuário inserir “retângulo”, o programa deve solicitar a base e a altura do retângulo e calcular sua área usando a fórmula: área = base * altura.
Lembre-se de executar este programa em um ambiente que suporte a linguagem de programação que você está usando. Se precisar de ajuda para implementar o código, estou à disposição para auxiliar!
*/

let formaGeometrica = prompt(
  "Digite o nome de uma forma geométrica (quadrado, triângulo ou retângulo):"
).toLowerCase();
let area;

switch (formaGeometrica) {
  case "quadrado":
    let lado = parseFloat(prompt("Digite o comprimento do lado do quadrado:"));
    area = lado * lado;
    console.log("Área do quadrado: " + area.toFixed(2) + "m²");
    break;
  case "triângulo":
    let baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"));
    let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"));
    area = (baseTriangulo * alturaTriangulo) / 2;
    console.log("Área do triângulo: " + area.toFixed(2) + "m²");
    break;
  case "retângulo":
    let baseRetangulo = parseFloat(prompt("Digite a base do retângulo:"));
    let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo:"));
    area = baseRetangulo * alturaRetangulo;
    console.log("Área do retângulo: " + area.toFixed(2) + "m²");
    break;
  default:
    console.log("Forma geométrica não reconhecida.");
}
