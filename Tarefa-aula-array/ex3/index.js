/*
Crie um array de idades, com 8 idades e faça as seguintes operações : 

a-) O ano mudou e todas as pessoas envelheceram um ano. Imprima as novas idades 

b-) Fomos para outo planeta e a idade lá ao invés de acrescentar um ano, ela dobra. Imprima as novas idades . 

c-) Queremos saber a soma das idades . Imprima a somatória 

*/

let idades = [15, 22, 34, 42, 51, 63, 70, 88];

for (let i = 0; i < idades.length; i++) {
  idades[i] += 1;
}
console.log("Idades após envelhecer um ano:", idades);

for (let i = 0; i < idades.length; i++) {
  idades[i] *= 2;
}
console.log("Idades dobradas em outro planeta:", idades);

let somaIdades = 0;
for (let i = 0; i < idades.length; i++) {
  somaIdades += idades[i];
}
console.log("Somatória das idades:", somaIdades);


/*
faça (deixe o inicio do contador = 0;enquanto o inicio do contador for menor que o tamanho da lista de nomes :
  adicione +1 ao contador){
    escreva no na página (o item atual da lista)
  }
*/