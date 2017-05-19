

//var nNum1 = prompt("Dime un numero");
//var nNum2 = prompt("Dime otro");
//declaracion de una funcion
function sumar(a,b){
    return Number(a) + Number(b);


}

function restar(a,b){
    return (a) - (b);


}

function multiplicar(a,b){
    return (a) * (b);


}

function dividir(a,b){
    return (a) / (b);


}

//function sumarDobles (a=0, b=0){
//a *= 2;
//b *= 2;
//return a+b;
//}


function main(){
    let nNum1=prompt("Dime un numero");
    let nNum2=prompt("Dime otro");

    console.log(sumar(nNum1, nNum2));
    console.log(restar(nNum1, nNum2));
    console.log(restar(nNum2, nNum1));
    console.log(multiplicar(nNum1, nNum2));
    console.log(dividir(nNum1, nNum2));

    saludar()
}


function saludar(){
    let sSaludo="hola";
    console.log(sSaludo);
}

main()
