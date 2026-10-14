// Nivel 1: La maquina de una sola tecla
// Autor: Jesus Vega
// Que funcion uso y por que:
// Uso funciones tradicionales con "function" sin parametros ni return (mostrarBienvenida y mostrarTablero)
// porque la idea en este nivel es agrupar varias lineas de console.log que se repiten siempre igual
// y poder ejecutarlas varias veces con una sola linea.

// --- Calentamiento antes del Nivel 1 ---
console.log("--- Calentamiento ---");
console.log(7 > 3);             // Salida esperada: true
console.log("gato" === "Gato"); // Salida esperada: false (cambia por la mayuscula)
console.log(10 <= 10);          // Salida esperada: true
console.log(5 !== 5);           // Salida esperada: false
console.log(2 + 2 === 4);       // Salida esperada: true

// --- Mision A: El cartel de bienvenida ---
// Entrada: Ninguna (no recibe parametros)
// Salida esperada en consola:
// NOVA Arcade
// Horario: 10:00 - 22:00
// Ficha: $2500
function mostrarBienvenida() {
  console.log("NOVA Arcade");
  console.log("Horario: 10:00 - 22:00");
  console.log("Ficha: $" + 2500);
}

console.log("\n--- Mision A: Llamada 1 y 2 ---");
mostrarBienvenida();
mostrarBienvenida();

// --- Mision B: El tablero de maquinas ---
// Entrada: Lee la variable externa maquinasOcupadas (primero con 2 y luego con 5)
// Salida esperada: El estado de las 5 maquinas (OCUPADA o LIBRE) y cuantas quedan libres al final.
let maquinasOcupadas = 2;

function mostrarTablero() {
  console.log("--- TABLERO ---");
  for (let i = 1; i <= 5; i++) {
    if (i <= maquinasOcupadas) {
      console.log("Maquina " + i + ": OCUPADA");
    } else {
      console.log("Maquina " + i + ": LIBRE");
    }
  }
  console.log("Maquinas libres: " + (5 - maquinasOcupadas));
}

console.log("\n--- Mision B: Con 2 maquinas ocupadas ---");
mostrarTablero();

// Paso 7: Cambiamos el valor a 5 y volvemos a llamar la funcion sin tocar nada adentro
maquinasOcupadas = 5;
console.log("\n--- Mision B: Con 5 maquinas ocupadas ---");
mostrarTablero();
// Que cambio: Ahora las 5 maquinas salen como OCUPADA y quedan 0 libres, porque la funcion
// consulta el valor actual de maquinasOcupadas justo en el momento en que la llamamos.
