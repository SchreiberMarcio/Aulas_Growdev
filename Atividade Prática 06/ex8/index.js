/*
Crie uma variável para armazenar o salário do usuário e atribua um
valor a essa variável. Crie a validação necessária:
- Caso o salário seja MENOR que R$ 1.903,98, insira no html
"ISENTO DE IR";
- caso contrário insira "TRIBUTADO NO IR".
*/

let salarioUsuario = parseInt(prompt("Digite o salario:"));

if (salarioUsuario < 1903.98) {
  document.write("ISENTO DE IR");
} else {
  document.write("TRIBUTADO NO IR");
}
