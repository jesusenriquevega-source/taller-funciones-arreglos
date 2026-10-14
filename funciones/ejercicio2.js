// Nivel 2: Entrada y salida
// Autor: Jesus Vega
// Que funcion uso y por que:
// Uso funciones tradicionales con parametros y return (precioPaquete y puntosATickets)
// porque aqui necesitamos recibir datos distintos en cada llamada y devolver el resultado
// numerico para poder guardarlo en variables o pasarlo directamente a otra funcion.

// --- Mision A: El precio del paquete ---
// Entrada: cantidad (numero de fichas que compra el cliente)
// Salida esperada:
// precioPaquete(1)  -> 2500
// precioPaquete(4)  -> 10000
// precioPaquete(5)  -> 10000
// precioPaquete(12) -> 24000
function precioPaquete(cantidad) {
  if (cantidad >= 5) {
    return cantidad * 2000;
  } else {
    return cantidad * 2500;
  }
}

console.log("--- Mision A: Pruebas de precioPaquete ---");
console.log("1 ficha: $" + precioPaquete(1));
console.log("4 fichas: $" + precioPaquete(4));
console.log("5 fichas: $" + precioPaquete(5));
console.log("12 fichas: $" + precioPaquete(12));
// Nota sobre el salto entre 4 y 5: Con 4 fichas se pagan $10000 (a $2500 cada una) y con 5
// tambien da $10000 (porque baja a $2000 cada una). Para el cliente es raro pagar lo mismo por 4 que por 5.

// --- Mision B: De puntos a tickets ---
// Entrada: puntos (numero) y esOro (booleano true/false)
// Salida esperada:
// puntosATickets(250, false)  -> 2
// puntosATickets(250, true)   -> 4
// puntosATickets(99, false)   -> 0
// puntosATickets(1000, true)  -> 20
function puntosATickets(puntos, esOro) {
  let tickets = Math.floor(puntos / 100);
  if (esOro) {
    tickets = tickets * 2;
  }
  return tickets;
}

console.log("\n--- Mision B: Pruebas de puntosATickets ---");
console.log("250 pts (normal): " + puntosATickets(250, false));
console.log("250 pts (oro): " + puntosATickets(250, true));
console.log("99 pts (normal): " + puntosATickets(99, false));
console.log("1000 pts (oro): " + puntosATickets(1000, true));

// Paso 7: Encadenar el resultado de puntosATickets dentro de precioPaquete
const costoFichasConTickets = precioPaquete(puntosATickets(1000, true));
console.log("Costo de comprar esas 20 fichas: $" + costoFichasConTickets); // Salida esperada: 40000
