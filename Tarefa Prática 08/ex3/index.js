/*
Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos.
*/


let numerosPerfeitos = [];
let somaDivisores;

for (let numeroAtual = 2; numerosPerfeitos.length < 4; numeroAtual++) {
    somaDivisores = 1; // Inicia com 1 porque todo número é divisível por 1
    
    for (let i = 2; i <= numeroAtual / 2; i++) {
        if (numeroAtual % i === 0) {
            somaDivisores += i;
        }
    }
    
    if (somaDivisores === numeroAtual) {// Se a soma dos divisores próprios for igual ao número, ele é perfeito
        numerosPerfeitos.push(numeroAtual);
    }
}


console.log("Os primeiros quatro números perfeitos são:", numerosPerfeitos);