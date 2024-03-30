/*
Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando

pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000
*/

let pessoas = [];
let respostaContinuar;
let respostaTrabalhando;

do {
  let pessoa = {
    nome: prompt("Informe o nome:"),
    idade: parseInt(prompt("Informe a idade:")),
  };

  respostaTrabalhando = confirm("Está trabalhando?");
  pessoa.trabalhando = respostaTrabalhando;

  if (pessoa.trabalhando) {
    pessoa.salario = parseFloat(prompt("Informe o salário:"));
  }

  pessoas.push(pessoa);

  respostaContinuar = confirm("Deseja continuar cadastrando?");
} while (respostaContinuar);

let desempregados = pessoas.filter((p) => !p.trabalhando);
let salarioMenor2500 = pessoas.filter((p) => p.trabalhando && p.salario < 2500);
let salarioMaior2500 = pessoas.filter(
  (p) => p.trabalhando && p.salario >= 2500
);

document.write("Pessoas desempregadas:");
desempregados.forEach((p) => document.write(`Nome: ${p.nome}, Idade: ${p.idade}`));

document.write("<br>Pessoas empregadas com salários menores que 2500:");
salarioMenor2500.forEach((p) =>
  document.write(`Nome: ${p.nome}, Idade: ${p.idade}, Salário: ${p.salario}`)
);

document.write("<br>Pessoas empregadas com salários maiores que 2500:");
salarioMaior2500.forEach((p) =>
  document.write(`Nome: ${p.nome}, Idade: ${p.idade}, Salário: ${p.salario}`)
);
