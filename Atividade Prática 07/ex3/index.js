/*
Utilizar os métodos push, pop, unshift e shift para manipular um
array
a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
de sua escolha
b. Utilize o método push para adicionar uma fruta no final do
array
c. Utilize o método pop para remover a última fruta do array
d. Utilize o método unshift para adicionar uma fruta no início do
array
e. Utilize o método shift para remover a primeira fruta do array
f. Exiba o array resultante na tela
*/



let frutas = ["Maçã", "Banana", "Laranja"];


frutas.push("<strong> Manga </strong> ");           //adiciona um item ao fim do array
document.write(frutas,"<br>");

frutas.pop();                   //remove o item do fim do array
document.write(frutas, "<br>");

frutas.unshift("<strong>  Bergamota  </strong>");      //adiciona um item no começo do array
document.write(frutas,"<br>");

frutas.shift();                 //retira um item do comeco do array
document.write(frutas);
