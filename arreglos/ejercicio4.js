// Nivel 4: La caja de datos
// Autor: Jesus Vega
// Que funcion o estructura uso y por que:
// Uso arreglos (Arrays) junto con la propiedad .length, el ciclo for clasico y el ciclo for...of.
// Uso for clasico cuando necesito el indice (para numerar cada partida desde 1) y for...of
// cuando solo necesito recorrer los valores para acumular el total, contar clasificados y buscar el mayor.

// --- Mision A: El catalogo en pantalla ---
// Entrada: Arreglo con 6 juegos
// Salida esperada: Primer juego, ultimo juego, cantidad total (6), arreglo con "EN MANTENIMIENTO" y undefined en posicion 10.
const catalogo = ["Pinball", "Galaxia", "Karts", "Zombis", "Tetris", "PacMan"];

console.log("--- Mision A: Catalogo ---");
console.log("Primer juego:", catalogo[0]);
console.log("Ultimo juego:", catalogo[catalogo.length - 1]);
console.log("Total de juegos:", catalogo.length);

// Reemplazamos el juego en el indice 2 (el tercero de la lista)
catalogo[2] = "EN MANTENIMIENTO";
console.log("Catalogo actualizado:", catalogo);
console.log("Catalogo en indice 10:", catalogo[10]); // Salida: undefined (esa casilla no existe)

// --- Mision B: El marcador del torneo ---
// Entrada: [320, 150, 980, 640, 75, 510, 500, 1200]
// Salida esperada:
// Total de puntos: 4375
// Clasificados (>= 500): 5
// Puntaje mas alto: 1200
// Promedio con un decimal: 546.9
// Indice del mayor: 7 (Partida 8)
const puntajes = [320, 150, 980, 640, 75, 510, 500, 1200];

console.log("\n--- Mision B: Lista de partidas ---");
for (let i = 0; i < puntajes.length; i++) {
  console.log("Partida " + (i + 1) + ": " + puntajes[i] + " pts");
}

let total = 0;
let clasificados = 0;
let mayor = puntajes[0];

for (const p of puntajes) {
  total = total + p;
  if (p >= 500) {
    clasificados = clasificados + 1;
  }
  if (p > mayor) {
    mayor = p;
  }
}

const promedio = (total / puntajes.length).toFixed(1);

// Paso 7: Encontrar el indice donde quedo el puntaje mayor
let indiceMayor = 0;
for (let i = 0; i < puntajes.length; i++) {
  if (puntajes[i] === mayor) {
    indiceMayor = i;
  }
}

console.log("\n--- Resumen del marcador ---");
console.log("Total de puntos de la ronda:", total);
console.log("Cuantos clasificaron (>= 500):", clasificados);
console.log("Puntaje mas alto:", mayor);
console.log("Promedio con un decimal:", promedio);
console.log("Indice del mayor:", indiceMayor + " | Partida:", indiceMayor + 1);
