function converter() {
    var celsius = document.getElementById("celsius").value;
    if (celsius === "") {
      alert("Por favor, insira um valor para Celsius.");
      return;
    }
    
    celsius = parseFloat(celsius);
    var fahrenheit = (celsius * 9/5) + 32;
    
    document.getElementById("resultado").innerHTML = 
      celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F";
  }
  