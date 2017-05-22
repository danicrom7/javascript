
function primo(){
let num1=Number(prompt('Introduzca un numero', ''));
if (num1 == 1 || num1 == 2) {
alert('El numero ' +num1+ ' es primo'); 
}else{
for (var i=2;i<num1;i++) {
if(num1 % i == 0) {
alert('El numero ' +num1+ ' no es primo'); 
break;
}else{
alert('El numero ' +num1+ ' es primo'); 
break;
}
}
 
 
}
}
primo()