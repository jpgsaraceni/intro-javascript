var pedido1;
var pedido2;
var valor;

pedido1 = 4
pedido2 = 1

function calcular (pedido){
	if (pedido == 1){
	pedido = 4;
  } else if (pedido == 2) {
  pedido = 4.5;
  } else if (pedido == 3) {
  pedido = 5;
  } else if (pedido == 4) {
  pedido = 1.5;
  }
	return pedido;
}

valor = calcular(pedido1) + calcular(pedido2);
console.log(`TOTAL: R$ ${valor.toFixed(2)}`);