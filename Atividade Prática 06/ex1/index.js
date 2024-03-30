/*
Crie uma variável para ler a idade de um motorista. Caso o
motorista tenha idade maior ou igual a 18 anos imprime no console
“Pode dirigir”, caso contrário imprima “Não pode dirigir”.
*/

let idadeMotorista = prompt("Digite a sua idade:");
if (idadeMotorista < 18) {
  console.log("Não pode dirigir");
} else {
  console.log("Pode dirigir");
}
