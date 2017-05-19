const prompt = require('prompt');

(function main () {

	let sumar =  (a, b) => {
    	return Number(a) + Number(b);
	}

	let restar = (a, b) => {
    return a - b;
	}

	let multiplicar = (a, b) => {
		return a * b;
	}

	let dividir = (a, b) => {
		return a / b;
	}
	
	let calcular = (pNum1, pNum2, pOp) => {
		let result = 0;

        if (pOp == "S") {
			// Suma
			result = sumar(pNum1, pNum2)
        } else if (pOp == "R") {
            // Resta
			result = restar(pNum1, pNum2)
        } else if (pOp == "P") {
			// Multiplicacion
			result = multiplicar(pNum1, pNum2)
        } else if (pOp == "D") {
			// DivisiÃ³n
			result = dividir(pNum1, pNum2)
		} else {
			// InstrucciÃ³n no soportada
			result = NaN
		} // Fin del if
		return result;
    } // Fin de la funciÃ³n calcular


	// Objeto con los mensajes y variables del prompt 
	let oDatos = {
		properties : {
			num1 : {
				description : 'Escribe un nÃºmero',
				default : 24
			},
			num2 : {
				description : 'Escribe otro nÃºmero',
				default : 12
			},
			op : {
				description : 
				"Selecciona <S>uma, <R>esta, <P>roducto o <D>ivision",
				default : "S"
			}
		}
	}
	// Start the prompt 
	prompt.start();  // 
	// Get prpopiedades del objeto oDatos
	// 
  	prompt.get(oDatos, function (err, result) {
		//Entradas (inputs) recibidas por lÃ­nea de comandos
		// result {num1, num2, op)		
		let sRespuesta = calcular (result.num1, result.num2, result.op);

		if (isNaN(sRespuesta)){
			console.log("OperaciÃ³n no soportada");	
		} else {
			console.log(`El resultado es ${sRespuesta}`);	
		}
  	});
})();
