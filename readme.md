# Taller: Funciones y Arreglos en JavaScript

**Estudiante:** Jesús Enrique Vega Sánchez

Este repositorio contiene el desarrollo de los ejercicios de la guía **Funciones y arreglos (Ruta de 10 niveles)** en JavaScript, organizados por carpetas según el tema de cada nivel.

## Estructura del repositorio

```text
taller-funciones-arreglos/
├── README.md
├── funciones/
│   ├── ejercicio1.js
│   └── ejercicio2.js
├── arrow-functions/
│   └── ejercicio3.js
├── arreglos/
│   ├── ejercicio4.js
│   └── ejercicio5.js
└── metodos-array/
    ├── ejercicio6.js
    ├── ejercicio7.js
    ├── ejercicio8.js
    ├── ejercicio9.js
    └── ejercicio10.js
```

## Documentación de los ejercicios

### 1. Carpeta `funciones/`

* **`ejercicio1.js` (Nivel 1: La máquina de una sola tecla)**
  * **Qué función usé y por qué:** Usé funciones tradicionales con `function` sin parámetros ni `return` (`mostrarBienvenida` y `mostrarTablero`). Las usé porque en este punto solo necesitaba agrupar varias instrucciones `console.log` y un ciclo `for` para ejecutarlas varias veces con una sola línea sin repetir código.
  * **Entrada:** No recibe argumentos por paréntesis (en `mostrarTablero` se lee la variable externa `maquinasOcupadas` con valor `2` y luego `5`).
  * **Salida esperada:**
    ```text
    NOVA Arcade
    Horario: 10:00 - 22:00
    Ficha: $2500

    --- TABLERO ---
    Maquina 1: OCUPADA
    Maquina 2: OCUPADA
    Maquina 3: LIBRE
    Maquina 4: LIBRE
    Maquina 5: LIBRE
    Maquinas libres: 3
    ```

* **`ejercicio2.js` (Nivel 2: Entrada y salida)**
  * **Qué función usé y por qué:** Creé las funciones `precioPaquete(cantidad)` y `puntosATickets(puntos, esOro)` con parámetros y `return`. Las hice así porque necesitaba cambiar el cálculo según los datos del cliente y devolver el resultado numérico para usarlo en otras cuentas, en vez de solo imprimirlo.
  * **Entrada:** `precioPaquete(1)`, `precioPaquete(4)`, `precioPaquete(5)`, `precioPaquete(12)` y `puntosATickets(250, false)`, `puntosATickets(250, true)`, `puntosATickets(99, false)`, `puntosATickets(1000, true)`.
  * **Salida esperada:**
    ```text
    1 ficha: $2500
    4 fichas: $10000
    5 fichas: $10000
    12 fichas: $24000
    250 pts (normal): 2
    250 pts (oro): 4
    99 pts (normal): 0
    1000 pts (oro): 20
    Costo de comprar esas 20 fichas: $40000
    ```

### 2. Carpeta `arrow-functions/`

* **`ejercicio3.js` (Nivel 3: La flecha)**
  * **Qué función usé y por qué:** Usé funciones flecha (`=>`) de una sola línea guardadas en `const` (`mitad`, `esCaro`, `etiqueta`, `esGratis`, `aplicarDescuento`, `nombreCorto` y `alcanza`). Las usé con retorno implícito (sin llaves y sin `return`) porque cada función resuelve una sola operación o comparación rápida.
  * **Entrada:** `precioOriginal = 18000`, `descuento = 25`, `juego = "Galaxia Infinita 2"`, `saldoCliente = 15000`.
  * **Salida esperada:**
    ```text
    mitad(9): 4.5
    esCaro(2500): false
    etiqueta: Galaxia (piso 2)
    Nombre recortado del juego: Galaxia Infi
    Precio con descuento: 13500
    ¿Es gratis?: false
    ¿Le alcanza el saldo?: true
    ```

### 3. Carpeta `arreglos/`

* **`ejercicio4.js` (Nivel 4: La caja de datos)**
  * **Qué estructura usé y por qué:** Usé arreglos (`catalogo` y `puntajes`), consulta por índice (`[0]` y `length - 1`), un ciclo `for` clásico para listar las partidas usando el índice `i + 1`, y un ciclo `for...of` para acumular el total de puntos, contar cuántos clasificaron (`>= 500`) y sacar el puntaje mayor en un solo recorrido.
  * **Entrada:** `puntajes = [320, 150, 980, 640, 75, 510, 500, 1200]`.
  * **Salida esperada:**
    ```text
    Total de puntos de la ronda: 4375
    Cuantos clasificaron (>= 500): 5
    Puntaje mas alto: 1200
    Promedio con un decimal: 546.9
    Indice del mayor: 7 | Partida: 8
    ```

* **`ejercicio5.js` (Nivel 5: Los que dejan huella)**
  * **Qué métodos usé y por qué:** Usé los métodos que mutan el arreglo original (`push`, `pop`, `shift`, `unshift`, `splice` y `reverse`). Los usé porque tanto en la fila de espera como en el mantenimiento de máquinas el objetivo era modificar directamente la lista existente a medida que entraban o salían elementos.
  * **Entrada:** `fila = ["Ana", "Beto", "Caro", "Dani"]` y `catalogo = ["Pinball", "Galaxia", "Karts", "Zombis", "Tetris", "Aereo"]`.
  * **Salida esperada:**
    ```text
    Entra a jugar: Ana
    Estado final de la fila: [ 'Gabi', 'Beto', 'Caro', 'Dani', 'Elena' ]
    Cuantos quedan: 5
    Tras invertir: [ 'Pinball', 'Aereo', 'Tetris', 'Laberinto', 'Galaxia' ] | length: 5
    Resultado: El catalogo se redujo de 6 a 5 maquinas.
    ```

### 4. Carpeta `metodos-array/`

* **`ejercicio6.js` (Nivel 6: Transformar con `map`)**
  * **Qué método usé y por qué:** Usé `.map()` con funciones flecha porque necesitaba aplicar el 20% de descuento a todos los precios y armar las etiquetas del tablero LED en mayúsculas con sus tickets, creando arreglos nuevos del mismo tamaño sin alterar los datos originales.
  * **Entrada:** `precios = [2500, 18000, 9000, 4500, 12000]`, `juegos = ["pinball", "karts", "zombis", "laberinto"]`, `partidas = [320, 980, 75, 640]`.
  * **Salida esperada:**
    ```text
    Precios con 20% de descuento: [ 2000, 14400, 7200, 3600, 9600 ]
    etiquetas: [ 'PINBALL - 3 tickets', 'KARTS - 9 tickets', 'ZOMBIS - 0 tickets', 'LABERINTO - 6 tickets' ]
    ```

* **`ejercicio7.js` (Nivel 7: Seleccionar con `filter`)**
  * **Qué método usé y por qué:** Usé `.filter()` para filtrar los puntajes que clasifican (`>= 500`), el podio (`> 900`) y las máquinas disponibles, y al final lo encadené con `.map()` para pasar a mayúsculas únicamente los juegos disponibles.
  * **Entrada:** `partidas = [320, 980, 75, 640, 500, 1200, 410]` y arreglos `juegos` y `estados`.
  * **Salida esperada:**
    ```text
    Clasificados: [ 980, 640, 500, 1200 ] | Cantidad: 4
    Podio: [ 980, 1200 ] | Cantidad: 2
    Disponibles en mayusculas: [ 'PINBALL', 'KARTS', 'ZOMBIS', 'AEREO' ]
    ```

* **`ejercicio8.js` (Nivel 8: Comprobar con `some` y `every`)**
  * **Qué métodos usé y por qué:** Usé `.every()` para verificar si todas las máquinas pasaron la revisión o si todos los jugadores superaron los 100 puntos, y `.some()` para detectar si al menos una máquina falló o si hubo algún puntaje estrella (`> 900`). Los usé porque solo necesitaba un valor `true` o `false` para las condiciones del `if / else`.
  * **Entrada:** `ronda = [320, 980, 75, 640, 510]` y `revisionTorneo = [true, true, false, true, true]`.
  * **Salida esperada:**
    ```text
    Decision: LLAMAR TECNICO
    hayEstrella: true | rondaValida: false | todoEnOrden: false
    Color del semaforo: ROJO
    ```

* **`ejercicio9.js` (Nivel 9: Ordenar con `sort`)**
  * **Qué método usé y por qué:** Usé `.sort()` sobre copias creadas con `[...arreglo]` junto con comparadores numéricos `(a, b) => b - a` y de texto `localeCompare`. Usé la copia superficial para no dañar el orden de llegada original, ya que `sort` sí muta el arreglo.
  * **Entrada:** `jugadores` con puntajes `320, 1200, 75, 980, 510`.
  * **Salida esperada:**
    ```text
    Campeon: Beto
    Orden alfabetico: [ 'Ana', 'Beto', 'Caro', 'Dani', 'Elena' ]
    Top 3 con formato: [ '1. Beto - 1200 pts', '2. Dani - 980 pts', '3. Elena - 510 pts' ]
    ```

* **`ejercicio10.js` (Nivel 10: `forEach`, encadenamiento y `reduce`)**
  * **Qué métodos usé y por qué:** Encadené `.filter()`, `.sort()`, `.map()` y `.forEach()` en una sola expresión para filtrar a los clasificados, ordenarlos de mayor a menor, armar el texto con sus tickets e imprimir cada línea en consola. Además, usé `.reduce()` para sumar el total de puntos de todas las partidas en un solo valor.
  * **Entrada:** Arreglo `partidas` con 6 objetos `{ nombre, pts }`.
  * **Salida esperada:**
    ```text
    1. BETO - 12 tickets
    2. DANI - 9 tickets
    3. ELENA - 5 tickets
    Total de puntos sumados con reduce: 3525
    ```
