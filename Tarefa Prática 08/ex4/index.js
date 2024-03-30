/*
Desenvolva um algoritmo que declare uma lista de 10 números e
solicite um número para o usuário e no final informe se o número
que o usuário digitou está dentro da lista ou não.
*/
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Solicita um número ao usuário
let numeroUsuario = parseInt(prompt("Digite um número:"));

// Verifica se o número está na lista
let encontrado = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroUsuario) {
        encontrado++;
    }
}

// Exibe o resultado
if (encontrado > 0) {
    console.log("O número está na lista.");
} else {
    console.log("O número não está na lista.");
}