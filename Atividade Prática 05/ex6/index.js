/*
Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP
*/

let largura = parseFloat(prompt("Digite a largura do terreno em metros:"));
let comprimento = parseFloat(prompt("Digite o comprimento do terreno em metros:"));
let area = largura * comprimento;
let classificacao;

if (area < 100) {
    classificacao = "TERRENO POPULAR";
} else if (area >= 100 && area <= 500) {
    classificacao = "TERRENO MASTER";
} else {
    classificacao = "TERRENO VIP";
}

alert("Área do terreno: " + area.toFixed(2) + "m2\nClassificação: " + classificacao);
