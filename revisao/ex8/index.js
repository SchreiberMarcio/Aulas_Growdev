let rendaMensal = parseFloat(prompt("Digite sua renda mensal:"));
let possuiRestricoes = prompt("Você possui restrições em seu histórico de crédito? (sim/não)").toLowerCase();

if (rendaMensal >= 2000 && possuiRestricoes === 'não') {
    console.log("Cliente elegível para empréstimo bancário.");
} else if (rendaMensal >= 2000 && possuiRestricoes === 'sim') {
    console.log("Cliente elegível para empréstimo bancário, mas com restrições devido ao histórico de crédito.");
} else if (rendaMensal < 2000 && possuiRestricoes === 'não') {
    console.log("Cliente não é elegível para empréstimo bancário devido à renda insuficiente.");
} else {
    console.log("Cliente não é elegível para empréstimo bancário devido à renda insuficiente e ao histórico de crédito.");
}
