

compra = {
   oDatos : {
       empresa : "Chopes s.l",
       direccion : "avd penitencia",
       telefono : 914567345,
       nif : "234523f"
   },
   oCliente : {
       nombre : "pepe",
       apellidos: "lopez",
       direccion : "avd las flores",
       telefono :"677453421",
       nif :"48400157E"
   },
   oLista : {
       alcatel :{
           descripcion: "smartphone de 5p con 1gb de ram y 4 de rom, Android.",
           precio: "89€",
           cantidad:1 
       },
       bravia: {
           descripcion:"smartv de 50p con tecnologia OLED",
           precio:"500€",
           cantidad:2
       }

   },//elemento lista
   oBasica : {
       total:"1089€",
       iva:"21%",
       pago:"tarjeta"
   },

cuentas: (a, b) => {
    return Number(a) + Number(b);
},
calcular: function()
}