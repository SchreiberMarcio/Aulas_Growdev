/*
Tendo como entrada a altura e o sexo (codificado da seguinte
forma: 1 para sexo feminino e 2 para sexo masculino) de uma
pessoa, construa um programa que calcule e mostre seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7
*/

let altura = prompt("Digite sua altura:");
altura = altura.replace(",", ".").replace(/(\d)(\d{2})/, "$1.$2");

/*segundo replace usado pra fazer uma busca no numero que foi informado e
dividir o numero em 2 blocos e usando'$1.$2' coloca um ponto entre os dois blocos
*/

altura = parseFloat(altura);

let sexo = parseInt(
  prompt("Digite 1 para sexo FEMININO e 2 para sexo MASCULINO")
);

let pesoIdeal;

if (sexo !== 1 && sexo !== 2) {
  document.write(
    "Entrada inválida para o sexo. Por favor, insira 1 para feminino ou 2 para masculino."
  );
} else {
  if (sexo === 1) {
    pesoIdeal = 62.1 * altura - 44.7;
  } else {
    pesoIdeal = 72.7 * altura - 58;
  }
  document.write("O peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
}
