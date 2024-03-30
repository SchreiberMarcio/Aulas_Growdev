
let anoAtual = new Date().getFullYear();
let anoNascimento = parseInt(prompt("Digite o ano de nascimento: "));

let idade = anoAtual - anoNascimento;

if (idade >= 16) {
    console.log("Você pode votar este ano.");
} else {
    console.log("Você não pode votar este ano.");
}
