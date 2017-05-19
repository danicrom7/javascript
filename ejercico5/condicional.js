(function main () {
    let nNum1 = 0;

    let compruebaEdad =  (a) => {
        if (a<18) {
              return ("Hola chaval")
        } else if (a <50){
              return ("hola amigo")
           
        } else {
            return ("buenos dias")
            
        }
        
    }
    


    nNum1 = Number(prompt("Dime tu edad", 12));
    
    
    let sRespuesta = compruebaEdad(nNum1);
   
    console.log(sRespuesta);

})();
