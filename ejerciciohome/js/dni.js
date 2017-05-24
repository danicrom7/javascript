

var letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S",
        "Q","V","H","L","C","K","E","T"];
var num1 = prompt("escribre tu dni (sin letra)");

var letra = prompt("escriba la letra del DNI en mayuscula");

letra = letra.toUpperCase();

if(num1 < 0 || num1 > 99999999) {
 console.log("El número proporcionado no es correcto");
}
else {
  var calcularDni= letras[num1 % 23];
  if(calcularDni != letra) {
    console.log("La letra o el número proporcionados no son correctos");
  }
  else {
    console.log("El número de DNI y su letra son validos");
  }
}
    

