function convertToRoman(num) {

    // Definimos en un objetos los valores
  
  const numbersRom = {
  M:	1000,
  CM:	900,
  D:	500,
  CD:	400,
  C:	100,
  XC:	90,
  L:	50,
  XL:	40,
  X:	10,
  IX:	9,
  V:	5,
  IV:	4,
  I:	1
  }
  
  let accumulatorRom = ""; // creamos un acumulador para las letras romanas
  
  for(const key in numbersRom){ //iteramos a traves del objeto con un FOR IN (M, CM , D , .....)
  
    const numberValue = numbersRom[key] // creamos una variable que contenga el valor numerico de cada iteracion 
  
    while(numberValue <= num){ // Mientras se cumpla la condicion: valor ingresado (num) sea mayor al valor iterado romano(numberValue), se le restara a num dicho valor romano.(ejemplo: (X:10 <= 36) se cumple ==> 36-10)
  
    num -= numberValue // se le resta a num el valor iterado hasta que se deje de cumplir la condicion. 
  
    accumulatorRom += key // se le suma al acumulador la letra romana iterada que ya fue restada hasta llegar al valor deseado. 
    } 
  }
  
   return accumulatorRom;
  }
  
  convertToRoman(36);
  console.log(convertToRoman(36))
