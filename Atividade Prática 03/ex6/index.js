/*
Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...
*/
let contagemRegressiva = "";

for (let i = 30; i >= 1; i--) {
  let ePrimo = true;

  for (let divisor = 2; divisor < i; divisor++) {
    if (i % divisor === 0) {
      ePrimo = false;
      break;
    }
  }

  if (i > 1 && ePrimo) {
    contagemRegressiva += "[" + i + "] ";
  } else {
    contagemRegressiva += i + " ";
  }
}

console.log(contagemRegressiva);
