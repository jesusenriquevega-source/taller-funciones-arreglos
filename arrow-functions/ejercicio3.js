// Nivel 3: La flecha
// Autor: Jesus Vega
// Que funcion uso y por que:
// Uso funciones flecha (arrow functions) con retorno implicito guardadas en const
// porque todas estas utilidades hacen un calculo o comparacion en una sola expresion,
// asi el codigo queda de una sola linea sin tener que abrir llaves ni escribir return.

// --- Mision A: Tres traducciones ---
// Entrada y salida esperada:
// mitad(9) -> 4.5
// esCaro(2500) -> false
// etiqueta("Galaxia", 2) -> "Galaxia (piso 2)"
const mitad = n => n / 2;
const esCaro = precio => precio > 5000;
const etiqueta = (juego, piso) => juego + " (piso " + piso + ")";

console.log("--- Mision A: Tres traducciones ---");
console.log("mitad(9):", mitad(9));
console.log("esCaro(2500):", esCaro(2500));
console.log("etiqueta:", etiqueta("Galaxia", 2));

// --- Mision B: La caja de herramientas ---
// Herramienta 1: devuelve true si el precio es exactamente 0
const esGratis = precio => precio === 0;

// Herramienta 2: devuelve el precio con el porcentaje de descuento aplicado
const aplicarDescuento = (precio, porcentaje) => precio - (precio * porcentaje / 100);

// Herramienta 3: recorta el texto a sus primeras 12 letras para la pantalla LED
const nombreCorto = texto => texto.slice(0, 12);

// Herramienta 4: devuelve true si el saldo alcanza para pagar el precio
const alcanza = (saldo, precio) => saldo >= precio;

// Paso 5: Armar el recibo con precio 18000, descuento 25%, juego "Galaxia Infinita 2" y saldo 15000
// Salida esperada:
// Nombre recortado: Galaxia Infi
// Precio con descuento: 13500
// Es gratis: false
// Le alcanza el saldo (con descuento): true (con el precio original de 18000 daria false)
const precioOriginal = 18000;
const descuento = 25;
const juego = "Galaxia Infinita 2";
const saldoCliente = 15000;

const precioFinal = aplicarDescuento(precioOriginal, descuento);

console.log("\n--- Mision B: Recibo ---");
console.log("Nombre recortado del juego:", nombreCorto(juego));
console.log("Precio con descuento:", precioFinal);
console.log("¿Es gratis?:", esGratis(precioFinal));
console.log("¿Le alcanza el saldo?:", alcanza(saldoCliente, precioFinal));

// Paso 6: Si ponemos llaves sin return (ej. const esGratisMala = precio => { precio === 0 };)
// devuelve undefined porque al abrir llaves JavaScript espera un return explicito.
