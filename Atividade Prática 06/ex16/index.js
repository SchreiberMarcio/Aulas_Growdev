/*
Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
*/

let anoAtual = 2024;
let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
let idade = anoAtual - anoNascimento;

if (idade >= 16) {
  console.log("Você pode votar este ano.");
} else {
  console.log("Você não pode votar este ano.");
}
