/** 
 * Constantes
*/
const SALUDO ="Hello ";


//acceso al node btn1 del DOM
var oBtn1 = document.querySelector('#btn1');

//acceso al Node nombre del DOM
var oNombre = document.querySelector('#nombre');
//acceso el Node respuesta del DOM
var oRespuesta = document.querySelector('#respuesta');


function saludar(){
 //let sNombre = oNombre.value;
let sSaludo = SALUDO

sSaludo += oNombre.value;

oRespuesta.innerHTML ="<b>"+ sSaludo + "</b>";
//alert( sSaludo);
//alert(SALUDO + sNombre);
}

oBtn1.onclick=saludar;

console.dir(oBtn1)

console.dir(oNombre)

console.dir(oRespuesta)