
let nome = prompt("Digite seu nome: ");
let idade = parseInt(prompt("Digite sua idade: "));

let anoAtual = new Date().getFullYear();
let anoNascimento = anoAtual - idade;

console.log(`Nome: ${nome}, Idade: ${idade} anos, nasceu em ${anoNascimento}`);
