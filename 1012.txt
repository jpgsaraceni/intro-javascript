JAVASCRIPT

const PI = 3.14159;
let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

let circulo = (PI*C**2);
let triangulo = A*C/2;
let trapezio = (A+B)*C/2;
let quadrado = B**2;
let retangulo = A*B;

function imprimir(str, float){
	numero = float.toFixed(3);
  return (str + " = " + numero + "\n")
}
alert(imprimir("TRIANGULO", triangulo) + imprimir("CÍRCULO", circulo) + imprimir("TRAPÉZIO", trapezio) + imprimir("QUADRADO", quadrado) + imprimir("RETÂNGULO", retangulo));