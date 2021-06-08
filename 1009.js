

let nome = prompt("Informe o nome do funcionário:");
let fixo = Number(prompt("Informe o salário fixo do funcionário:"));
let vendas = Number(prompt("Informe o valor total de vendas do mês do funcionário:"));

let salario = (fixo+vendas*0.15).toFixed(2);

alert("TOTAL = " + salario);