<!DOCTYPE hmtl />
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <label for="numero">Digite um número:</label>
    <input type="number" id="numero" name="numero" />
    <button type="button" onclick=calculaProximos()>Calcular</button>
    <script>
      function calculaProximos(){
      const x = Number(document.getElementById("numero").value);
      var lista = [x];
      for (i=1; i<11; i++){
        lista[i] = x + i
      }
      lista.shift();
      let saida = lista.join(' ');
      document.getElementById("numero_digitado").innerHTML = x;
      document.getElementById("saida").innerHTML = saida;
      }
    </script>
    <div>
    Os 10 próximos números maiores que <span id="numero_digitado"></span>:
    <p id="saida"></p>
    </div>
  </body>
</html>
