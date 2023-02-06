function telephoneCheck(str) {

    let validatorRegEx = [

      // creamos un array con una regex para cada caso a validar.
      
      //555-555-5555
      /^\d{3}-\d{3}-\d{4}$/,
    
      //(555)555-5555
      /^\(\d{3}\)\d{3}-\d{4}$/,
    
      //(555) 555-5555
      /^\(\d{3}\) \d{3}-\d{4}$/,
    
      //555 555 5555
      /^\d{3} \d{3} \d{4}$/,
    
      //5555555555
      /^\d{10}$/,
    
      //1 555 555 5555
    /^\d{1} \d{3} \d{3} \d{4}$/,

    //1 555-555-5555
    /^\d{1} \d{3}-\d{3}-\d{4}$/
    
    ]
    
    
      return validatorRegEx.some((regEx)=> regEx.test(str)); //utilizamos el metodo .some para comprobar si al menos un elemento del array cumple con la condición implementada por la función proporcionada. En la funcion utilizamos el metodo .test para poder evaluar la regex.
    }
    
    telephoneCheck("555-555-5555");