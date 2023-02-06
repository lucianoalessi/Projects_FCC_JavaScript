function rot13(str) {

    const alphabet = [ "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V" , "W" , "X" , "Y" , "Z" ]

    let accumulator = "" ; // creamos un acumulador para alojar cada nueva letra codificadas

    for( let i = 0 ; i < str.length ; i++) // recorremos el string ingresado

    const isALetter = alphabet.includes(str[i]) // lo que hacemos aca es verificar si el caracter iterado, es una letra. Ya que si este fuera un espacio u otro tipo de caracter, no habria que codificarlo en ROT13.Solo hay que codificar las letras.

    if(isALetter === false){
        accumulator += str[i] // si no es una letra le sumamos el caracter al acumulador
    }else{ // en caso de si ser una letra , hay que codificarla, desplazandola 13 lugares en el abecedario. 
        
        const numeroIndex = alphabet.indexOf(str[i]) // aqui obtenemos el numero de indice del caracter iterado.
        accumulator += alphabet[numeroIndex + 13] || alphabet[numeroIndex - 13] // aqui desplazamos 13 lugares el caracter.(en caso de estar casi en el final del alpahbet en vez de sumarle 13 , le restamos 13, para que no de undefined. ya que si le sumamos 13 y se termina el array , javascript por defecto nos arroja undefined.)
    }

    return accumulator;
  }
  
  rot13("SERR PBQR PNZC");