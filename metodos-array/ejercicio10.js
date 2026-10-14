// Nivel 10: La ultima vuelta (forEach, encadenamiento y reduce)
// Autor: Jesus Vega
// Que metodos uso y por que:
// Uso .forEach() cuando solo quiero recorrer el arreglo para imprimir cada linea en consola sin construir otro arreglo.
// Luego encadeno .filter(), .sort(), .map() y .forEach() para pasar de los datos crudos al tablero final en un solo flujo,
// y uso .reduce() (del reto extra del taller) para sumar todos los puntajes en un solo valor sin escribir ciclos for.

// --- Mision A: El recorrido que imprime ---
// Entrada: ["Ana", "Beto", "Caro", "Dani"]
// Salida esperada: Lineas "Puesto 1: ANA"... y comprobar que forEach devuelve undefined.
const finalistas = ["Ana", "Beto", "Caro", "Dani"];

console.log("--- Mision A: Recorrido con forEach ---");
const resultadoForEach = finalistas.forEach((nombre, i) => {
  console.log("Puesto " + (i + 1) + ": " + nombre.toUpperCase());
});
console.log("Lo que devuelve forEach:", resultadoForEach); // Salida esperada: undefined

const resultadoMap = finalistas.map((nombre, i) => "Puesto " + (i + 1) + ": " + nombre.toUpperCase());
console.log("Lo que devuelve map:", resultadoMap);
// Explicacion: map crea y devuelve un arreglo nuevo en memoria, pero si solo queremos imprimir en pantalla
// sin guardar otra lista, forEach es el metodo adecuado porque solo ejecuta la accion por cada elemento.

// --- Mision B: El tablero final (Cadena completa) ---
// Entrada: 6 objetos con { nombre, pts }
// Salida esperada en consola:
// 1. BETO - 12 tickets
// 2. DANI - 9 tickets
// 3. ELENA - 5 tickets
const partidas = [
  { nombre: "Ana", pts: 320 },
  { nombre: "Beto", pts: 1200 },
  { nombre: "Caro", pts: 75 },
  { nombre: "Dani", pts: 980 },
  { nombre: "Elena", pts: 510 },
  { nombre: "Fer", pts: 440 }
];

console.log("\n--- Mision B: Tablero final encadenado ---");
const clasificadosPrevios = partidas.filter(p => p.pts >= 500);
console.log("Cuantos quedaron tras el filtro:", clasificadosPrevios.length);

// Nota del Paso 3: Aqui no hace falta poner [...partidas] antes del sort porque .filter()
// ya devuelve un arreglo nuevo independiente, asi que .sort() ordena ese arreglo filtrado sin tocar "partidas".
partidas
  .filter(p => p.pts >= 500)
  .sort((a, b) => b.pts - a.pts)
  .map((p, i) => (i + 1) + ". " + p.nombre.toUpperCase() + " - " + Math.floor(p.pts / 100) + " tickets")
  .forEach(linea => console.log(linea));

console.log("Arreglo partidas original intacto:", partidas.map(p => p.nombre + ":" + p.pts));

// --- Extra: Metodo reduce (Cierre del taller y tema evaluado en Moodle) ---
// Que funcion uso y por que:
// Uso .reduce() para resumir todo el arreglo de partidas en un solo numero (la suma total de puntos)
// sin necesidad de declarar una variable externa ni escribir un ciclo for...of como en el Nivel 4.
// Entrada: arreglo partidas
// Salida esperada: 3525 puntos en total
const totalPuntos = partidas.reduce((acumulador, partida) => acumulador + partida.pts, 0);
console.log("\n--- Extra con reduce ---");
console.log("Total de puntos sumados con reduce:", totalPuntos);
