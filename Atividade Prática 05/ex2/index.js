/*
Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;
let continuar = 'sim';

while (continuar.toLowerCase() === 'sim') {
  let salario = parseFloat(prompt("Digite o salário do funcionário:"));
  let sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino):");

  if (sexo.toLowerCase() === 'm') {
    totalSalarioHomens += salario;
  } else if (sexo.toLowerCase() === 'f') {
    totalSalarioMulheres += salario;
  }

  continuar = prompt("Deseja continuar? (Sim/Não)");
}

console.log("Total de salários pagos aos homens: R$ " + totalSalarioHomens.toFixed(2));
console.log("Total de salários pagos às mulheres: R$ " + totalSalarioMulheres.toFixed(2));
