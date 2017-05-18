
function sumar(a, b, c, d){
    return a+b+c+d;
}
//cuenta los datos como un array
function sumarArg(){
    let nResult = 0;
    for(var i = 0; i < arguments.length; i++){
        nResult += arguments[i];
    }
    return nResult;
}

function main(){
let nNum1 = Number(prompt("Dime un numero"));
let nNum2 = Number(prompt("Dime un numero"));
let nNum3 = Number(prompt("Dime un numero"));
let nNum4 = Number(prompt("Dime un numero"));
console.log(sumarArg(nNum1,nNum2,nNum3,nNum4));
}
main()