/*var num1 = prompt("Introduce un numero entero");

var result = suerte();
(function suerte (num1){
   


   
  


    if (num1 % 2 == 0) {
        return "par";
        
    } else {
        return "impar";
        
    }

});
console.log("El numero "+num1+" es "+result);*/

var num1 = prompt("Introduce un número");
 
var resultado = parImpar(num1);
console.log("El número "+num1+" es "+resultado);
 
function parImpar(numero) {
  if(num1 % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
} 