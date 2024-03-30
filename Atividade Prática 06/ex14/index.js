let numero = prompt("Digite um número:");
numero = Number(numero); 

if (numero <= 0) {
  console.log("Por favor, insira um número maior que 0.");
} else {
  let ultimoValor = numero;

  while (true) {
    if (numero * 3 >= 500) {
      break; 
    }
    numero *= 3; 
    ultimoValor = numero; 
  }

  console.log("O último valor antes de atingir 500 é: " + ultimoValor);
}
