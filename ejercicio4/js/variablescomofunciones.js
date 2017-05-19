//declaracion de una funcion como variable
//let n_var = "valor variable"

//btn1.onClick = 
//function (a, b){ return +a + +b}

let sumar = function (a, b){
    return +a + +b
}

//funcion arrow

let restar = (a,b) => {return a-b}



function sumarDobles (a, b){
a *= 2;
b *= 2;
return a + b;
}




function main(){
    let nNum1=  0
    let nNum2=  0

 nNum1 = Number(prompt(12));
 nNum2 = Number(prompt(23));

let nResultSuma = sumar (nNum1,nNum2)
let nResultResta = restar (nNum1, nNum2)
console.log(nResultSuma);
console.log(nResultResta);
//console.log(sumarObjetos(oNum1, oNum2));
//console.log(sumarDobles(oNum1.valor, oNum2.valor));

 
}



main()
