JAVASCRIPT

let cod1 = prompt("Informe o código da peça 1:");
let quant1 = Number(prompt("Informe a quantidade de peças 1:"));
let valorUnit1 = Number(prompt("Informe o valor unitério da peça 1:"));
let cod2 = prompt("Informe o código da peça 2:");
let quant2 = Number(prompt("Informe a quantidade de peças 2:"));
let valorUnit2 = Number(prompt("Informe o valor unitério da peça 2:"));

function preco(quant, unit){
	var valorFinal = quant*unit
	return valorFinal
}

alert("VALOR A PAGAR = " + (preco(quant1, valorUnit1)+preco(quant2, valorUnit2)));