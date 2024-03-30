/* 

    Crie uma função chamada dobrar números , insira dois parametros que deverão ser dobrados. 

    Esta função será chamada ao abrir a página e mostrará um alerta com o resultado. Exemplo: “O dobro do número 10 é 20.”

*/
function dobrarNumeros(numero1, numero2) {
  let dobro1 = numero1 * 2;
  let dobro2 = numero2 * 2;
  alert(`O dobro do número ${numero1} é ${dobro1}`);
  alert(`O dobro do número ${numero2} é ${dobro2}`);
}

let resultado = dobrarNumeros(10, 5);
