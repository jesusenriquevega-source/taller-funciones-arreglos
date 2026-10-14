// Nivel 8: El detector (some y every)
// Autor: Jesus Vega
// Que metodos uso y por que:
// Uso .some() para saber si al menos un elemento cumple una condicion (ej. si alguna maquina fallo o si hay algun puntaje > 900)
// y .every() para comprobar si todos los elementos cumplen sin excepcion (ej. si todas las maquinas estan bien o si todos sacaron >= 100).
// Los uso porque solo necesito una respuesta booleana (true o false) para tomar decisiones con if/else.

// --- Mision A: ¿Se puede abrir el salon? ---
// Entrada: [true, true, true, false, true, true]
// Salida esperada:
// Con un false -> puedeAbrir: false, llamarTecnico: true, imprime "LLAMAR TECNICO"
// Con todas en true -> imprime "ABRIR"
const revision = [true, true, true, false, true, true];

const puedeAbrir = revision.every(r => r === true);
const llamarTecnico = revision.some(r => r === false);

console.log("--- Mision A: Revision de apertura ---");
console.log("¿Se puede abrir el salon?:", puedeAbrir);
console.log("¿Hay que llamar al tecnico?:", llamarTecnico);

if (puedeAbrir && !llamarTecnico) {
  console.log("Decision: ABRIR");
} else {
  console.log("Decision: LLAMAR TECNICO");
}

// Cambiamos el false por true y volvemos a probar
revision[3] = true;
if (revision.every(r => r === true)) {
  console.log("Decision tras reparar la maquina: ABRIR");
}

// --- Mision B: El semaforo del torneo ---
// Entrada:
// ronda = [320, 980, 75, 640, 510]
// revisionTorneo = [true, true, false, true, true]
let ronda = [320, 980, 75, 640, 510];
const revisionTorneo = [true, true, false, true, true];

function semaforo() {
  const hayEstrella = ronda.some(p => p > 900);
  const rondaValida = ronda.every(p => p >= 100);
  const todoEnOrden = !revisionTorneo.some(r => r === false);

  console.log("hayEstrella:", hayEstrella, "| rondaValida:", rondaValida, "| todoEnOrden:", todoEnOrden);

  if (hayEstrella && rondaValida && todoEnOrden) {
    console.log("Color del semaforo: VERDE");
  } else if (rondaValida) {
    console.log("Color del semaforo: AMARILLO");
  } else {
    console.log("Color del semaforo: ROJO");
  }
}

console.log("\n--- Mision B: Semaforo con datos del torneo ---");
semaforo(); // Salida esperada: ROJO (porque hay un puntaje de 75 y una maquina en false)

console.log("\n--- Paso 6: Semaforo con ronda vacia [] ---");
ronda = [];
semaforo(); // Salida esperada: AMARILLO (porque every sobre [] devuelve true)
