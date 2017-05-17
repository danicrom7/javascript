//JavaScript & EcmaScript ES6
/** 
 * Constantes
*/
const SALUDO ="Hello ";
// LAS VAR puedes escribirse con var $_az19
var nEdad = 21; //numeros
var sCadena = "Pepe"; //cadena de texto
var sCadena2 = 'juan "El habichuela"';
var esBueno = true;
var esMalo = false;

var queSoy;//vale undefined .

queSoy = esMalo;


var sGrupo = ` <ul>

   <li>${sCadena}</li>
    <li>${sCadena2}</li>
              </ul>
      
             `

//OPERADORES +-*/^

//acceso al node btn1 del DOM
var oBtn1 = document.querySelector('#btn1');

//acceso al node btn1 del DOM
var oEdad = document.querySelector('#edad');

//acceso al Node nombre del DOM
var oNombre = document.querySelector('#nombre');
//acceso el Node respuesta del DOM
var oRespuesta = document.querySelector('#respuesta');


function saludar(){
 //let sNombre = oNombre.value;
let sSaludo = SALUDO
let nEdad = oEdad.value
// let es para declarar una funcion , es como la var,
// da lo mismo. a noser que necesitemos una muy general.
sSaludo += oNombre.value;

oRespuesta.innerHTML ="<b>"+ sSaludo + "</b>";
oRespuesta.innerHTML += sGrupo;
oRespuesta.innerHTML += nEdad+2;
//alert( sSaludo);
//alert(SALUDO + sNombre);
}

oBtn1.onclick=saludar;

console.dir(oBtn1)

console.dir(oNombre)

console.dir(oRespuesta)

console.dir(nEdad)