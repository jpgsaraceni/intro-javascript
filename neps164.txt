const linhas = 5;
const colunas = 4;
let corfinal = "branco";

if (linhas%2 != colunas%2){
  corfinal = "preto"
}
console.log(corfinal)