JAVASCRIPT

let dias = prompt("Informe o tempo em dias");
let anos = 0;
let meses = 0;

if(dias > 365){
	anos = Math.trunc(dias/365);
    dias -= anos*365;
}
if(dias > 30){
    meses = Math.trunc(dias/30);
    dias -= meses*30;
}

alert(anos + " ano(s)\n" + meses + " mes(es)\n" + dias + " dia(s)" )