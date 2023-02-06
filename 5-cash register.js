function checkCashRegister(price, cash, cid){

    // creamos un objeto con los valores de cada unidad
    const UNIT_AMOUNT = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .10,
      "QUARTER": .25,
      "ONE": 1.00,
      "FIVE": 5.00,
      "TEN": 10.00,
      "TWENTY": 20.00,
      "ONE HUNDRED": 100.00
    }
    let totalCID = 0; // creamos un acumulador para calcular el valor del total que tiene disponible la caja
    for (let element of cid) { // iteramos por los elementos de la caja
      totalCID += element[1]; // le vamos sumando cada elemento que tiene la caja, al total (totalCID).
    }
    totalCID = totalCID.toFixed(2); // Utilizamos el metodo toFixed(2) para que javascript haga los calculos con dos decimales correctamente. Ya que suele fallar en los calculos con decimales.
    let changeToGive = cash - price; //calculamos el cambio que sera el efectivo entregado menos el precio de venta del articulo comprado. 
    const changeArray = []; //creamos un array para el cambio a entregar
    if (changeToGive > totalCID) { //si el cambio a entregar es mayor al dinero disponible en la caja , devolveremos FONDOS INSUFICIENTES.
      return { status: "INSUFFICIENT_FUNDS", change: changeArray };
    } else if (changeToGive.toFixed(2) === totalCID) { //si el cambio a entregar es igual al dinero disponible en la caja , devolveremos CLOSED.
      return { status: "CLOSED", change: cid };
    } else {
      cid = cid.reverse(); //invertimos el orden de la caja, para que nos muestre las monedas de mayor a menor. 
      for (let elem of cid) { //iteramos por cada elemento de la caja nuevamente
        let temp = [elem[0], 0]; //creamos un nuevo acumulador , donde iremos sumando la cantidad de cada moneda utilizada. 
        while (changeToGive >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) { //mientras el cambio sea mayor o igual a la moneda iterada Y esa moneda sea mayor a cero (osea que esa moneda esta disponible.)
          temp[1] += UNIT_AMOUNT[elem[0]]; //vamos sumando en el acumulador las monedas utilizadas , osea las monedas que le vamos dando al cliente como vuelto
          elem[1] -= UNIT_AMOUNT[elem[0]]; //y a su vez le vamos restamos a la caja , las monedas que sacamos para dar el vuelto (es la plata que vamos sacando de la caja, para darle el vuelto al cliente). 
          changeToGive -= UNIT_AMOUNT[elem[0]]; // tambien restamos la cantidad que debemos devolver con las monedas utilizadas hasta llegar a cero. (osea hasta anular la deuda del cambio con el cliente)
          changeToGive = changeToGive.toFixed(2);
        }
        if (temp[1] > 0) {
          changeArray.push(temp);
        }
      }
    }
    if (changeToGive > 0) { // si el cambio que debemos devolver quedo mayor a cero, quiere decir que gastamos todo el dinero de la caja y aun no podemos devolver la totalidad del cambio.por lo tanto la caja no tiene fondos suficiente para devolver todo el vuelto. 
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: changeArray}; // caso contrario la caja queda abierta y devolvemos el valor del cambio a entregar. 
  }