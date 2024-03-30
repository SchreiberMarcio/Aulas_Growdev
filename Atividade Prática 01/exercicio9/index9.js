

let numeroDeMacas = parseInt(prompt("Digite o número de maçãs compradas: "));

let precoPorMaca = numeroDeMacas < 12 ? 0.30 : 0.25;

let valorTotal = numeroDeMacas * precoPorMaca;

document.write(`O valor total da compra é: R\$${valorTotal.toFixed(2)}`);
