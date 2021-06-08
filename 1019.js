

let tempoSeg = prompt("Informe o tempo em segundos:");
let horas = 0;
let minutos = 0;

if(tempoSeg > 3600){
	horas = Math.trunc(tempoSeg/3600);
    tempoSeg -= horas*3600;
}
if(tempoSeg > 60){
    minutos = Math.trunc(tempoSeg/60);
    tempoSeg -= minutos*60;
}

alert(horas + ":" + minutos + ":" + tempoSeg);