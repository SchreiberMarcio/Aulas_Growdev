let saldoConta = 200;

let valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
saldoConta += valorDeposito; 

let porcentagemRetirada = parseFloat(prompt("Digite a porcentagem a ser retirada para o imposto de renda:"));
let valorRetirada = saldoConta * (porcentagemRetirada / 100);
saldoConta -= valorRetirada; 

console.log("Valor retirado para o imposto de renda: R$" + valorRetirada.toFixed(2));
console.log("Saldo atual da conta bancária após o imposto de renda: R$" + saldoConta.toFixed(2));
