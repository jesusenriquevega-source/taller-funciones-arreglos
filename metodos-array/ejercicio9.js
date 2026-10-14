// Nivel 9: La torre de control (sort)
// Autor: Jesus Vega
// Que metodo uso y por que:
// Uso .sort() acompanado de una copia con [...arreglo] y funciones comparadoras ((a, b) => b - a y localeCompare).
// Uso el comparador porque sort por defecto convierte los numeros en texto y los ordena mal (1200 antes que 75),
// y hago copia con [...] porque sort muta el arreglo original y necesitamos conservar el orden de llegada.

// --- Mision A: El ranking correcto ---
// Entrada: [320, 1200, 75, 980, 510]
// Salida esperada:
// Sin comparador: [1200, 320, 510, 75, 980]
// Mayor a menor: [1200, 980, 510, 320, 75]
const llegada = [320, 1200, 75, 980, 510];

const desastre = [...llegada].sort();
const rankingCorrecto = [...llegada].sort((a, b) => b - a);

console.log("--- Mision A: Ranking de puntajes ---");
console.log("sort() sin comparador:", desastre);
console.log("sort((a, b) => b - a):", rankingCorrecto);
console.log("llegada tras usar copias (intacta):", llegada);

// Si ordenamos llegada sin copia, se pierde el orden original
llegada.sort((a, b) => b - a);
console.log("llegada tras ordenarla sin copia (mutada):", llegada);

// --- Mision B: La tabla de campeones ---
// Entrada: Arreglo de 5 objetos con { nombre, pts }
const jugadores = [
  { nombre: "Ana", pts: 320 },
  { nombre: "Beto", pts: 1200 },
  { nombre: "Caro", pts: 75 },
  { nombre: "Dani", pts: 980 },
  { nombre: "Elena", pts: 510 }
];

console.log("\n--- Mision B: Tabla de campeones ---");
// Paso 2: Tercer jugador del arreglo
console.log("Tercer jugador:", jugadores[2].nombre);

// Paso 3: Ordenar copia de mayor a menor por puntos
const ranking = [...jugadores].sort((a, b) => b.pts - a.pts);
console.log("Campeon:", ranking[0].nombre);

// Paso 4: Ordenar copia alfabeticamente por nombre
const alfabetico = [...jugadores].sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Orden alfabetico:", alfabetico.map(j => j.nombre));

// Paso 5: Top 3 con formato usando slice(0, 3) y map
const top3 = ranking.slice(0, 3).map((j, i) => (i + 1) + ". " + j.nombre + " - " + j.pts + " pts");
console.log("Top 3 con formato:", top3);

// Paso 6: Empate en 980 puntos
const conEmpate = [...jugadores, { nombre: "Fer", pts: 980 }].sort((a, b) => b.pts - a.pts);
console.log("Con empate en 980:", conEmpate.map(j => j.nombre + " (" + j.pts + ")"));

// Paso 7: Confirmar que jugadores sigue en el orden de llegada original
console.log("jugadores original al final:", jugadores.map(j => j.nombre));
