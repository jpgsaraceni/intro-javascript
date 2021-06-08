

let numFuncionario = prompt("Informe o número do funcionário:");
let horasTrabalhadas = prompt("Informe o número de horas trabalhadas:");
let valorHora = prompt("Informe o valor da hora desse funcionário:");

let salario = (horasTrabalhadas*valorHora).toFixed(2);

alert("NUMBER = " + numFuncionario +"\n SALARY = " + salario);