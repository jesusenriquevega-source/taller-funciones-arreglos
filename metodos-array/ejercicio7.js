// Nivel 7: El colador (filter)
// Autor: Jesus Vega
// Que metodo uso y por que:
// Uso .filter() porque necesito quedarme unicamente con los elementos que cumplen una condicion
// (los puntajes que clasifican o los juegos que estan disponibles) y descartar los demas,
// sin alterar los arreglos originales.

// --- Mision A: Los clasificados ---
// Entrada: [320, 980, 75, 640, 500, 1200, 410]
// Salida esperada:
// clasificados (>= 500): [980, 640, 500, 1200] (4)
// podio (> 900): [980, 1200] (2)
// eliminados (< 500): [320, 75, 410] (3)
// filtroImposible (> 5000): [] (0)
const partidas = [320, 980, 75, 640, 500, 1200, 410];

const clasificados = partidas.filter(p => p >= 500);
const podio = partidas.filter(p => p > 900);
const eliminados = partidas.filter(p => p < 500);
const filtroImposible = partidas.filter(p => p > 5000);

console.log("--- Mision A: Clasificados ---");
console.log("Clasificados:", clasificados, "| Cantidad:", clasificados.length);
console.log("Podio:", podio, "| Cantidad:", podio.length);
console.log("Eliminados:", eliminados, "| Cantidad:", eliminados.length);
console.log("Suma de clasificados + eliminados:", clasificados.length + eliminados.length);
console.log("Filtro imposible (> 5000):", filtroImposible);

// --- Mision B: El catalogo disponible ---
// Entrada: listas paralelas de juegos y estados
const juegos = ["Pinball", "Galaxia", "Karts", "Zombis", "Laberinto", "Aereo"];
const estados = ["disponible", "mantenimiento", "disponible", "disponible", "mantenimiento", "disponible"];

// Paso 2: Juegos de 8 letras o menos
const cabenEnLed = juegos.filter(j => j.length <= 8);

// Paso 3: Juegos que contienen la letra "o" sin importar mayusculas
const conLetraO = juegos.filter(j => j.toLowerCase().includes("o"));

// Paso 4: Cruzar listas usando el indice i para dejar solo los disponibles
const disponibles = juegos.filter((j, i) => estados[i] === "disponible");

// Paso 5: Contar maquinas en mantenimiento de dos formas
const mantPorFiltro = estados.filter(e => e === "mantenimiento").length;
const mantPorResta = juegos.length - disponibles.length;

// Paso 6: Encadenar filter y map en una sola linea para tener disponibles en mayusculas
const disponiblesMayus = juegos.filter((j, i) => estados[i] === "disponible").map(j => j.toUpperCase());

console.log("\n--- Mision B: Catalogo disponible ---");
console.log("Caben en LED (<= 8 letras):", cabenEnLed, "| Cuantos:", cabenEnLed.length);
console.log("Con la letra 'o':", conLetraO, "| Cuantos:", conLetraO.length);
console.log("Disponibles:", disponibles, "| Cuantos:", disponibles.length);
console.log("En mantenimiento (filtrando / restando):", mantPorFiltro, "/", mantPorResta);
console.log("Disponibles en mayusculas:", disponiblesMayus);
