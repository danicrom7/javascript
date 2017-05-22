var resultado = Number(prompt("Pon un numero")); 
        var i, 
            fibo = 1, 
            fibo2 = 1, 
            resultado; 
 
        for(i = 0; i < 15; i++) { 
            // console.log(fibo); 
            fibo = fibo + fibo2; 
            fibo2 = fibo - fibo2; 
            console.log(resultado += ' | ' + fibo);
        } 