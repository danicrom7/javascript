 {
    var normal = prompt("escribe tu palindromo").toLowerCase().split('')
    var derecho = '', invertido = ''
    for (a in normal)
     {
     if (normal[a] != ' ' && normal[a] != ',' && normal[a] != '.')
      {
      switch (normal[a])
   // Ponemos las vocales para las palabras que vayamos a insertar lo reconozca.
       {
       case 'á':
        normal[a] = 'a'
        break
       case 'é':
        normal[a] = 'e'
        break
       case 'í':
        normal[a] = 'i'
        break
       case 'ó':
        normal[a] = 'o'
        break
       case 'ú':
        normal[a] = 'u'
        break

       }
      derecho += normal[a]
      }
     }
    invertido = derecho
    invertido = invertido.split('')
    invertido = invertido.reverse()
    invertido = invertido.join('')
    if (derecho == invertido)
 // Aqui tengo que poner el mensaje que quiero mostrar en pantalla.
     {
     alert(derecho + '\n' + invertido)
     alert('La palabra o frase que has introducido es un palindromo¡Bien hecho!')
     }
    else
     {
     alert(derecho + '\n' + invertido)
     alert('Esto no es un palindromo,¡Vuelve a intentarlo!')
     }
    }