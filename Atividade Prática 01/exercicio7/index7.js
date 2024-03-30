
let totalEleitores = parseInt(prompt("Digite o número total de eleitores do município: "));
let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "));
let votosNulos = parseInt(prompt("Digite o número de votos nulos: "));
let votosValidos = parseInt(prompt("Digite o número de votos válidos: "));


let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;


document.write('Percentual de votos brancos: ' + percentualBrancos.toFixed(2) + '%<br>');
document.write('Percentual de votos nulos: ' + percentualNulos.toFixed(2) + '%<br>');
document.write('Percentual de votos válidos: ' + percentualValidos.toFixed(2) + '%');
