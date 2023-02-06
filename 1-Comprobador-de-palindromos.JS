

//Comprobador de palíndromos

//Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.

//Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.

//Nota: Tendrás que eliminar todos los caracteres no alfanuméricos (puntuación, espacios y símbolos) y convertir todo en mayúsculas o minúsculas para comprobar si hay palíndromos.

//Pasaremos cadenas con formatos variables, como racecar, RaceCar y race CAR entre otros.

//También pasaremos cadenas con símbolos especiales, como 2A3*3a2, 2A3 3a2 y 2_A3*3#A2.


function palindrome(str) {
    var re = /[^A-Za-z0-9]/g; // Quitamos los caracteres no deseados con REGEX

    var lowRegStr = str.toLowerCase().replace(re, ''); // Convertimos la cadena ingresada a minuscula y eliminamos los espacios 

    var reverseStr = lowRegStr.split('').reverse().join(''); // Separamos la cadena en un arreglo , la invertimos y la volvemos a unir en una cadena

    return reverseStr === lowRegStr; // Compararamos si reverseStr es estricatamente igual a lowRegStr, si se cumple devolvera TRUE.

  }
  
  palindrome("eye");