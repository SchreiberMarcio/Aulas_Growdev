let rendaMensal = parseFloat(prompt("Digite sua renda mensal:"));
let possuiRestricoes = prompt("Você possui restrições em seu histórico de crédito? (sim/não)").toLowerCase();

let elegivelParaEmprestimo;

if (rendaMensal >= 2000 && possuiRestricoes === 'não') {
    elegivelParaEmprestimo = true;
} else {
    elegivelParaEmprestimo = false;
}

console.log("Cliente elegível para empréstimo bancário? " + elegivelParaEmprestimo);
