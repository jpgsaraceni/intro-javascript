<!DOCTYPE hmtl />
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
  <label for="numero">Digite o número de reclamações:</label>
  <input type="number" id="numero" name="numero" />
  <p id="resposta"></p>
  <script> 
  const reclamacoes = 0;
  if (reclamacoes == 0){
  document.getElementById("resposta").innerHTML = "vai ter copa!"
  } else {
  document.getElementById("resposta").innerHTML = "vai ter duas!"
  }
  </script>

  </body>
</html>