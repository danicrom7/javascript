
function main(){

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

let calcu =  (nNum1,nNum2,nOper) => {
    let result = 0;

        if (nOper == "s") {
                result = sumar(nNum1,nNum2)

        } else if (nOper == "r"){
              result = restar(nNum1,nNum2)
           
        } else if (nOper == "p"){
            result = multiplicar(nNum1,nNum2)
            
        }else if (nOper == "d"){
            result = dividir(nNum1,nNum2)
            
        }else {
            result = NaN
        }//fin de if
        return result;
    }
    let mostrarDatos = (pRespuesta) => {
		if (isNaN(pRespuesta)){
			console.log("OperaciÃ³n no soportada");	
		} else {
			console.log(`El resultado es ${pRespuesta}`);	
		}
	}
      let oDatox = {};

    oDatox.num1 = prompt("Escribe un nÃºmero", 25)
    oDatox.num2 = prompt("Escribe otro nÃºmero", 25)
    oDatox.op = prompt("Selecciona <S>uma, <R>esta, <P>roducto o <D>ivision","S")

    let sRespuesta = calcu(oDatox.num1, oDatox.num2, oDatox.op);
	mostrarDatos(sRespuesta);



   
    


}
main()
