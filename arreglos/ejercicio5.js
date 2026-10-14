// Nivel 5: Los que dejan huella (Metodos que mutan)
// Autor: Jesus Vega
// Que metodos uso y por que:
// Uso push, pop, shift, unshift, splice y reverse porque en este nivel necesitamos
// modificar directamente el arreglo original (agregar o sacar de la fila y actualizar el catalogo en el sitio).

// --- Mision A: La fila del torneo ---
// Entrada inicial: ["Ana", "Beto", "Caro", "Dani"]
// Salida esperada al final: ["Gabi", "Beto", "Caro", "Dani", "Elena"] (quedan 5 jugadores)
const fila = ["Ana", "Beto", "Caro", "Dani"];

// 1. Llegan dos jugadores nuevos al final de la fila
fila.push("Elena");
fila.push("Fer");

// 2. Se libera una maquina: entra el primero de la fila
const atendido = fila.shift();
console.log("--- Mision A: Fila del torneo ---");
console.log("Entra a jugar:", atendido); // Salida esperada: Ana

// 3. Llega alguien con pase VIP y se pone de primero
fila.unshift("Gabi");

// 4. El ultimo de la fila se cansa y se va
fila.pop();

console.log("Estado final de la fila:", fila);
console.log("Cuantos quedan:", fila.length);

// --- Mision B: Mantenimiento del catalogo ---
// Entrada inicial: ["Pinball", "Galaxia", "Karts", "Zombis", "Tetris", "Aereo"]
const catalogo = ["Pinball", "Galaxia", "Karts", "Zombis", "Tetris", "Aereo"];

// Paso 1: Guardar el tamano original
const tamanoInicial = catalogo.length;

// Paso 2 y 3: Retirar "Karts" y "Zombis" con un solo splice (estan desde el indice 2)
const retirados = catalogo.splice(2, 2);
console.log("\n--- Mision B: Mantenimiento ---");
console.log("Maquinas retiradas:", retirados);
console.log("Tras retirar averiados:", catalogo, "| length:", catalogo.length);

// Paso 4: Insertar "Laberinto" en el indice 2 sin borrar nada
catalogo.splice(2, 0, "Laberinto");
console.log("Tras insertar Laberinto:", catalogo, "| length:", catalogo.length);

// Paso 5: Sacar "Pinball" del principio con shift y meterlo al final con push
const movido = catalogo.shift();
catalogo.push(movido);
console.log("Tras mover Pinball al final:", catalogo, "| length:", catalogo.length);

// Paso 6: Invertir el orden del catalogo para leer de derecha a izquierda
catalogo.reverse();
console.log("Tras invertir:", catalogo, "| length:", catalogo.length);

// Paso 7: Comparar el length final con tamanoInicial
if (catalogo.length < tamanoInicial) {
  console.log("Resultado: El catalogo se redujo de " + tamanoInicial + " a " + catalogo.length + " maquinas.");
} else if (catalogo.length > tamanoInicial) {
  console.log("Resultado: El catalogo crecio.");
} else {
  console.log("Resultado: El catalogo quedo del mismo tamano.");
}
