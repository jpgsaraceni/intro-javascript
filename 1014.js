JAVASCRIPT

let distanciaTotal = Number(prompt("Informe a distância percorrida, em km:"));
let consumoTotal = Number(prompt("Informe o consumo total de combustível:"));

let consumoMedio = distanciaTotal/consumoTotal;

alert(consumoMedio.toFixed(3) + " km/L");