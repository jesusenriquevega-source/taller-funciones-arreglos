// Nivel 6: La fabrica (map)
// Autor: Jesus Vega
// Que metodo uso y por que:
// Uso .map() con funciones flecha porque necesito transformar todos los elementos de una lista
// (aplicar descuentos, pasar a mayusculas y armar etiquetas) obteniendo un arreglo nuevo del mismo
// tamano sin modificar ni danar los arreglos originales.

// --- Mision A: Los precios del festival ---
// Entrada: [2500, 18000, 9000, 4500, 12000]
// Salida esperada:
// preciosFestival: [2000, 14400, 7200, 3600, 9600]
// preciosTexto: ["$ 2000", "$ 14400", "$ 7200", "$ 3600", "$ 9600"]
const precios = [2500, 18000, 9000, 4500, 12000];

const preciosFestival = precios.map(p => p * 0.8);
const preciosTexto = preciosFestival.map(p => "$ " + p);

console.log("--- Mision A: Precios del festival ---");
console.log("Precios originales:", precios);
console.log("Precios con 20% de descuento:", preciosFestival);
console.log("Longitudes (original y nuevo):", precios.length, preciosFestival.length);
console.log("Precios formateados:", preciosTexto);

// --- Mision B: Las etiquetas del tablero ---
// Entrada:
// juegos = ["pinball", "karts", "zombis", "laberinto"]
// partidas = [320, 980, 75, 640]
const juegos = ["pinball", "karts", "zombis", "laberinto"];
const partidas = [320, 980, 75, 640];

// Paso 2: Nombres en mayusculas
const nombresLed = juegos.map(j => j.toUpperCase());

// Paso 3: Nombres con su puesto usando el segundo parametro (indice i)
const conPuesto = juegos.map((j, i) => (i + 1) + ". " + j.toUpperCase());

// Paso 4: Convertir puntos a tickets (dividiendo entre 100 y redondeando hacia abajo)
const tickets = partidas.map(p => Math.floor(p / 100));

// Paso 5: Unir juegos y tickets por posicion en una sola etiqueta
const etiquetas = juegos.map((j, i) => j.toUpperCase() + " - " + tickets[i] + " tickets");

console.log("\n--- Mision B: Etiquetas del LED ---");
console.log("nombresLed:", nombresLed);
console.log("conPuesto:", conPuesto);
console.log("tickets:", tickets);
console.log("etiquetas:", etiquetas);

// Paso 7: Comprobar que los arreglos originales siguen intactos
console.log("Original juegos:", juegos);
console.log("Original partidas:", partidas);
