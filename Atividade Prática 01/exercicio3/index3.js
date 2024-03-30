var totalCompra = 149.90;
var quantidadeParcelas = 2;
var valorParcela = totalCompra / quantidadeParcelas;
document.write("O valor total da compra foi R$" + totalCompra.toFixed(2) + "<br>");
document.write("Forma de pagamento: " + quantidadeParcelas + "x de R$" + valorParcela.toFixed(2));

