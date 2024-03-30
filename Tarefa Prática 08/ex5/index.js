/*
Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.

Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson
*/

let nomes = [];
for (let i = 1; i <= 5; i++) {
  let nome = prompt("Digite o " + i + "º nome:");
  nomes.push(nome);
}

document.write("Os nomes digitados foram: ");
for (let i = 0; i < nomes.length; i++) {
  document.write(nomes[i]);
  if (i < nomes.length - 1) {
    document.write(", ");
  }
}

document.write("<br>Os nomes na ordem inversa são: ");
for (let i = nomes.length - 1; i >= 0; i--) {
  document.write(nomes[i]);
  if (i > 0) {
    document.write(", ");
  }
}
