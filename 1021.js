

let valor = prompt("Informe o valor total:");
let valorOriginal = valor;
let notas100 = 0;
let notas50 = 0;
let notas20 = 0;
let notas10 = 0;
let notas5 = 0;
let notas2 = 0;
let moedas1 = 0;
let moedas50 = 0;
let moedas25 = 0;
let moedas10 = 0;
let moedas5 = 0;
let moedas01 = 0;

if(valor >= 100){
    notas100 = Math.trunc(valor/100);
    valor = valor - notas100*100;
}
if(valor >= 50){
    notas50 = Math.trunc(valor/50);
    valor = valor - notas50*50;
}        
if(valor >= 20){
    notas20 = Math.trunc(valor/20);
    valor = valor - notas20*20;
}            
if(valor >= 10){
    notas10 = Math.trunc(valor/10);
    valor = valor - notas10*10;
}               
if(valor >= 5){
    notas5 = Math.trunc(valor/5);
    valor = valor - notas5*5;
}
if(valor >= 2){
    notas2 = Math.trunc(valor/2);
    valor = valor - notas2*2;
}
if(valor > 0){
    moedas1 = Math.trunc(valor);
}

valor *= 100;

if(valor >= 50){
    moedas50 = Math.trunc(valor/50);
    valor = valor - moedas50*50;
}
if(valor >= 25){
    moedas25 = Math.trunc(valor/25);
    valor = valor - moedas25*25;
}
if(valor >= 10){
    moedas10 = Math.trunc(valor/10);
    valor = valor - moedas10*10;
}
if(valor >= 5){
    moedas5 = Math.trunc(valor/5);
    moedas01 = valor - moedas5*5;
}

alert(valorOriginal +"\nNOTAS:\n"+notas100+" nota(s) de R$100,00.\n"+notas50+" nota(s) de R$50,00.\n"+notas20+" nota(s) de R$20,00.\n"+notas10+" nota(s) de R$10,00.\n"+notas5+" nota(s) de R$5,00.\n"+notas2+" nota(s) de R$2,00.\nMOEDAS\n"+moedas1+" moeda(s) de R$1,00.\n"+moedas50+" moeda(s) de R$0,50.\n"+moedas25+" moeda(s) de R$0,25.\n"+moedas10+" moeda(s) de R$0,10.\n"+moedas5+" moeda(s) de R$0,05.\n"+moedas01+" moeda(s) de R$0,01.\n");