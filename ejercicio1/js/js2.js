//Object tambien seria un Null(Object Undefined)
var oDatos = {
    nombre:"Pepe",
    apellido:"Perez",
    edad:23,
    nacionalidad:"Suiza",
    esVaron:true,
    direccion:{
        calle:"",
        numero:"",
        poblacion:"",
        cp:"",
        pais:""
    }
}

oDatos.direccion.calle="C/ del pez";

console.info("tipos");
console.dir(typeof oDatos);
console.dir(oDatos);


//typeof   es un operador cuales son los tipos? son 5. no sale null