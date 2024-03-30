/*
Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, insira no
html “Pode dirigir” caso contrário imprima “Não pode dirigir”.
*/

let idadeMotorista = prompt("Digite a sua idade:");
let temCarteira = prompt(
  "Tem carteira de motorista? (responda 'sim' ou 'não')"
);

if (idadeMotorista < 18 || temCarteira.toLowerCase() !== "sim") {
  console.log("Não pode dirigir");
} else {
  console.log("Pode dirigir");
}
