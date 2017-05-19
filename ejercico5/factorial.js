
let numero = () =>{
    let aDato = [1,3,10,20,32]
    let mensaje = ""
    let nResult = 0;

for( let i=0; i < aDato.length; i++){
    mensaje += "aDato[i] +"
    nResult += aDato[i];


}
}
let facto =(pNum) =>{
    let nResult = 1
    for(let i = pNum; i > 1; i--){
        nResult *= i;
    }
    return nResult;
}

let nNum = prompt("Dime un numero menor que 170");
console.log(facto(nNum))
