JAVASCRIPT

let A = Number(prompt("Digite o valor de A:"));
let B = Number(prompt("Digite o valor de B:"));
let C = Number(prompt("Digite o valor de C:"));

let maiorAB = (A+B+Math.abs(A-B))/2;
let maiorBC = (B+C+Math.abs(C-B))/2;
let maior = (maiorAB+maiorBC+Math.abs(maiorAB-maiorBC))/2

alert(maior + " eh o maior")