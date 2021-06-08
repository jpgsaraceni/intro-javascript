<!DOCTYPE html />
<html lang="pt-BR">
  <head>
      <meta charset="UTF-8" />
      <title>1133</title>
  </head>
  <body>
      <input type="number" id="numeroA">
      <input type="number" id="numeroB">
      <button onclick=calcular()>
       Calcular
      </button>
      <p>a soma dos números que não são múltiplos de 13 entre X e Y, incluindo ambos: 
      <span id="resultado"></span></p>
      <script>
        function calcular(){
          const A = Number(document.getElementById("numeroA").value);
          const B = Number(document.getElementById("numeroB").value);
          let lista = [];
            for (i=A;i<(B+1);i++){
              if (i % 13 != 0){
                lista.push(i);
              }
            }
            let resposta = 0;
            lista.forEach(element => resposta += element);
            document.getElementById("resultado").innerHTML = resposta;
          }
      </script>
  </body>
</html>