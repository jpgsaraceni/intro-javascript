

let tempo = prompt("Informe o tempo da viagem (em horas):");
let velocidade = prompt("Informe a velocidade média da viagem (em km/h):")

let consumo = velocidade*tempo/12;

alert(consumo.toFixed(3));