







//cuenta los datos como un array
function mediaArg(){
    let nResult = 0;
    for(var i = 0; i < arguments.length; i++){
        nResult += arguments[i];
    }
    return nResult / arguments.length;
}

function main(){
let nNum1 = Number(prompt("Dime un numero"));
let nNum2 = Number(prompt("Dime un numero"));
let nNum3 = Number(prompt("Dime un numero"));
let nNum4 = Number(prompt("Dime un numero"));
console.log(mediaArg(nNum1,nNum2,nNum3,nNum4));
}
main()