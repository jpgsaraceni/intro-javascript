

let x1 = Number(prompt("Digite a coordenada x1:"));
let y1 = Number(prompt("Digite a coordenada y1:"));
let x2 = Number(prompt("Digite a coordenada x2:"));
let y2 = Number(prompt("Digite a coordenada y2:"));

let distancia = ((x1-x2)**2+(y1-y2)**2)**(1/2);

alert(distancia.toFixed(4));