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
      <p>valores entre eles cujo resto da divisão dele por 5 for igual a 2 ou igual a 3: 
      <span id="resultado"></span></p>
      <script>
        function calcular(){
          const A = Number(document.getElementById("numeroA").value);
          const B = Number(document.getElementById("numeroB").value);
          let calculado = [];
            for (i=A;i<(B+1);i++){
              if ((i % 5 == 3) || (i % 5 == 2)){
                calculado.push(i);
              }
            }
            document.getElementById("resultado").innerHTML = calculado;
          }
      </script>
  </body>
</html>