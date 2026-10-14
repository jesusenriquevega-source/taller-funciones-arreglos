# Respuestas del Cuadernillo: Funciones y Arreglos en JavaScript

**Estudiante:** Jesús Enrique Vega Sánchez

Aquí están todas las respuestas a las preguntas abiertas, tablas de predicción, controles de conocimiento, auditorías y el ticket de salida del PDF, redactadas de forma directa y sencilla para llenar el cuadernillo o responder en clase.

## Calentamiento antes del Nivel 1 (Página 5)

| # | Expresión | Nuestra respuesta | ¿Acertamos? | Qué aprendimos de esta |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `7 > 3` | `true` | Sí | Una comparación numérica devuelve `true` o `false` directamente. |
| 2 | `"gato" === "Gato"` | `false` | Sí | JavaScript diferencia entre letras mayúsculas y minúsculas. |
| 3 | `10 <= 10` | `true` | Sí | El operador `<=` da `true` si el número es menor o exactamente igual. |
| 4 | `5 !== 5` | `false` | Sí | `!==` pregunta si son distintos; como son iguales, devuelve `false`. |
| 5 | `2 + 2 === 4` | `true` | Sí | Primero resuelve la suma `2 + 2` y luego compara el resultado con `4`. |

## Nivel 1 · La máquina de una sola tecla (Páginas 6–10)

* **Misión A (Pág. 8) - Nombre exacto de la función:** `mostrarBienvenida`
* **Misión B (Pág. 9) - Paso 7 (Qué cambió al pasar `maquinasOcupadas` a 5):**
  Ahora las 5 máquinas se imprimen como `OCUPADA` y al final sale que quedan `0` máquinas libres, porque la función lee el valor que tenga la variable `maquinasOcupadas` en el momento en que la ejecutamos.
* **Control de conocimiento (Pág. 9):**
  * **Q1:** Escribir `mostrarTablero` sin paréntesis solo menciona la función pero no hace nada en pantalla. Poner `mostrarTablero()` con los paréntesis es la orden para que se ejecute todo el bloque que tiene adentro.
  * **Q2:** Marca: **`Abriendo...`**
    * *¿Por qué?:* Porque la función `avisar()` solo se declaró arriba, pero nunca se llamó con `avisar()`, así que solo se ejecuta el `console.log` que está por fuera.
  * **Q3:** Salen **`12`** líneas en total.
    * *Explica la cuenta:* Como la función tiene 4 `console.log` adentro y la llamamos 3 veces, se imprimen 4 líneas en cada llamada (`4 * 3 = 12`).
  * **Q4:**
    1. Evitamos repetir las mismas 12 líneas tres veces y el archivo queda mucho más corto y fácil de leer.
    2. Si después toca corregir un texto o un dato, lo cambiamos una sola vez dentro de la función y no en tres partes distintas.
* **Auditoría con IA (Pág. 10):**
  * **Sugerencia de la IA:** Guardar el total de máquinas (`5`) en una constante `totalMaquinas = 5` en lugar de dejar el `5` suelto en el `for` y en la resta.
  * **¿La probaste?:** Sí | **Veredicto:** Acertada | **Por qué lo decidimos así:** Porque si el salón pone más máquinas en la entrada, solo cambiamos ese número una vez.

## Nivel 2 · Entrada y salida (Páginas 11–15)

* **Misión A (Pág. 13):**
  * **Resultado de las cuatro pruebas:** `1 → 2500` · `4 → 10000` · `5 → 10000` · `12 → 24000`
  * **Por qué el salto entre 4 y 5 es raro para el cliente:** Porque 4 fichas sueltas a $2.500 cuestan $10.000, y 5 fichas con el precio de paquete a $2.000 también cuestan $10.000. Es decir, llevar 5 fichas vale exactamente lo mismo que llevar 4.
* **Misión B (Pág. 14):**
  * **Tabla del Paso 6:**
    * `puntosATickets(250, false)` → Predicción: `2` | Resultado real: `2`
    * `puntosATickets(250, true)` → Predicción: `4` | Resultado real: `4`
    * `puntosATickets(99, false)` → Predicción: `0` | Resultado real: `0`
    * `puntosATickets(1000, true)` → Predicción: `20` | Resultado real: `20`
  * **Paso 7 (Encadena):** `precioPaquete(puntosATickets(1000, true))` imprime `40000` (20 fichas a $2.000 cada una).
* **Control de conocimiento (Pág. 14):**
  * **Q1:** `b` tiene el valor **`undefined`**. Y `console.log(a + b)` imprime **`NaN`** (porque intenta sumar `10 + undefined`).
  * **Q2:** Marca: **`solo 10`**
    * *¿Por qué?:* Porque `return n * 2` entrega el `10` y termina la función de inmediato; lo que esté debajo del `return` nunca se ejecuta.
  * **Q3:** Le falta poner `return` al final de su función. Como solo usó `console.log`, la función muestra el número en pantalla pero devuelve `undefined`, y al multiplicar `undefined * 2` da `NaN`.
  * **Q4:** El **parámetro** es el nombre de la variable en la declaración (`cantidad` en `function precioPaquete(cantidad)`), y el **argumento** es el número real que le pasamos al llamarla (`4` en `precioPaquete(4)`).
* **Auditoría con IA (Pág. 15):**
  * **Sugerencia de la IA:** Probar con puntos negativos como `puntosATickets(-100, false)`, que devolvería `-1` tickets.
  * **¿La probaste?:** Sí | **Veredicto:** Acertada | **Por qué lo decidimos así:** En la consola `Math.floor(-100 / 100)` efectivamente da `-1`, aunque en un juego normal los puntos no bajan de cero.

## Nivel 3 · La flecha (Páginas 16–20)

* **Misión A (Pág. 18):**
  * **Pruebas:** `mitad(9) → 4.5` · `esCaro(2500) → false`
* **Misión B (Pág. 19):**
  * **Tabla del Paso 5 (Recibo):**
    * Nombre recortado del juego: `Galaxia Infi`
    * Precio con descuento: `13500`
    * ¿Es gratis?: `false`
    * ¿Le alcanza el saldo?: `true` (comparando el saldo de `15000` con el precio ya rebajado de `13500`; si se compara con los `18000` sin descuento da `false`).
  * **Paso 6 (Rompe y repara):** Al ponerle llaves a `esGratis` sin añadir `return`, devuelve **`undefined`**.
  * **Paso 7 (Argumenta):** Todas son cortas y se entienden bien en flecha, pero si tuviéramos que elegir una como `function` clásica sería `aplicarDescuento`, por si quisiéramos separar en dos líneas el cálculo del descuento y la resta final.
* **Control de conocimiento (Pág. 19):**
  * **Q1:** Marca: **`undefined`**
    * *¿Qué hay que cambiar para que dé 12?:* Quitarle las llaves `{ }` para que quede `const triple = n => n * 3;` (o escribir `return n * 3;` adentro).
  * **Q2:** `const sumar = (a, b) => a + b;`
  * **Q3:** En `const a = (x) => x + 1;` sobran los paréntesis porque solo recibe un parámetro. En `const b = (x, y) => x + y;` son obligatorios porque tiene dos parámetros.
  * **Q4:** En `mostrarTablero` del Nivel 1 prefiero `function` porque lleva un ciclo `for` y un `if / else` de varias líneas, no un cálculo de una sola expresión.
* **Auditoría con IA (Pág. 20):**
  * **Sugerencia de la IA:** En `aplicarDescuento`, usar paréntesis o multiplicar por `(1 - porcentaje / 100)` deja más clara la prioridad de la operación.
  * **¿La probaste?:** Sí | **Veredicto:** Discutible | **Por qué lo decidimos así:** Ambas dan `13500` en consola, pero `precio - (precio * porcentaje / 100)` nos parece más fácil de explicar en el grupo.

## Nivel 4 · La caja de datos (Páginas 21–25)

* **Misión A (Pág. 23):**
  * **Al imprimir `catalogo[10]` sale:** `undefined` (porque el arreglo solo tiene 6 elementos, del índice 0 al 5).
  * **Nota de posición 2:** Usamos `catalogo[2]` que reemplaza el tercer juego de la lista.
* **Misión B (Pág. 24):**
  * **Tabla del Paso 6:**
    * Total de puntos de la ronda: `4375`
    * Cuántos clasificaron (`≥ 500`): `5`
    * Puntaje más alto: `1200`
    * Promedio con un decimal: `546.9`
  * **Paso 7:** Índice: **`7`** · Partida: **`8`**
* **Control de conocimiento (Pág. 24):**
  * **Q1:** `a[1]` vale **`20`** · `a.length` vale **`4`** · `a[a.length]` vale **`undefined`**.
  * **Q2:** Marca: **`8`**
    * *¿Con qué arreglo daría un resultado equivocado este código?:* Con un arreglo de solo números negativos, como `[-5, -8, -2]`, porque `m` arranca en `0` y diría que el mayor es `0`.
  * **Q3:** Conviene `for` clásico cuando necesitamos usar el número del índice (`i`), y `for...of` cuando solo necesitamos leer el valor de cada elemento.
  * **Q4:** Debe cambiar `<=` por `<`, porque los índices llegan hasta `length - 1`; cuando `i` vale `lista.length` está pidiendo una casilla que no existe.
* **Auditoría con IA (Pág. 25):**
  * **Sugerencia de la IA:** Al arrancar `mayor = puntajes[0]`, sí funciona con `[-5, -20, -3]` dando `-3`, pero fallaría si el arreglo estuviera vacío `[]`.
  * **¿La probaste?:** Sí | **Veredicto:** Acertada | **Por qué lo decidimos así:** Probamos con `[-5, -20, -3]` en consola y dio `-3` correctamente porque no inicializamos en `0`.

## Nivel 5 · Los que dejan huella (Páginas 26–30)

* **Misión A (Pág. 28):**
  * **Estado final de la fila:** `["Gabi", "Beto", "Caro", "Dani", "Elena"]` · **Cuántos quedan:** `5`
* **Misión B (Pág. 29):**
  * **Paso 3:** Quedan `4` elementos tras retirar los averiados.
  * **Tabla del Paso 6:**
    * Tras retirar averiados: `["Pinball", "Galaxia", "Tetris", "Aereo"]` | length: `4`
    * Tras insertar Laberinto: `["Pinball", "Galaxia", "Laberinto", "Tetris", "Aereo"]` | length: `5`
    * Tras mover Pinball: `["Galaxia", "Laberinto", "Tetris", "Aereo", "Pinball"]` | length: `5`
    * Tras invertir: `["Pinball", "Aereo", "Tetris", "Laberinto", "Galaxia"]` | length: `5`
  * **Paso 7:** El catálogo **se redujo** (pasó de 6 a 5). *¿Podrías recuperar el orden original sin volver a escribirlo?:* No con una sola orden de deshacer, porque los métodos mutaron el arreglo original; tocaría volver a invertirlo, mover Pinball y reinsertar `retirados` con `splice`.
* **Control de conocimiento (Pág. 29):**
  * **Q1:** Línea 2: **`4`** · Línea 3: **`4`** · Línea 4: **`[1, 2, 3]`**
  * **Q2:** Marca: **`["a", "d"]`**
  * **Q3:** Porque `const` impide cambiar la variable por otro arreglo distinto (`a = [...]`), pero sí permite modificar los elementos que están guardados adentro.
  * **Q4:** Porque hacer `const copia = catalogo` no duplica el arreglo; las dos variables apuntan exactamente a la misma lista en memoria, así que lo que se borre en una se ve en la otra.
* **Auditoría con IA (Pág. 30):**
  * **Sugerencia de la IA:** Todos los métodos usados (`splice`, `push`, `shift`, `reverse`) mutan el arreglo original, y si cambiamos el orden de los pasos los índices cambian y se mueven máquinas distintas.
  * **¿La probaste?:** Sí | **Veredicto:** Acertada | **Por qué lo decidimos así:** Ninguno de los cuatro métodos crea copia, todos modifican `catalogo` directamente.

## Nivel 6 · La fábrica - `map` (Páginas 31–35)

* **Misión A (Pág. 33):**
  * **Resultado de `preciosFestival`:** `[2000, 14400, 7200, 3600, 9600]`
  * **Con el segundo `map` a texto:** `["$ 2000", "$ 14400", "$ 7200", "$ 3600", "$ 9600"]`
* **Misión B (Pág. 34):**
  * **Tabla del Paso 5:**
    * `nombresLed`: `["PINBALL", "KARTS", "ZOMBIS", "LABERINTO"]`
    * `conPuesto`: `["1. PINBALL", "2. KARTS", "3. ZOMBIS", "4. LABERINTO"]`
    * `tickets`: `[3, 9, 0, 6]`
    * `etiquetas`: `["PINBALL - 3 tickets", "KARTS - 9 tickets", "ZOMBIS - 0 tickets", "LABERINTO - 6 tickets"]`
  * **Paso 6:** Al poner llaves sin `return`, sale `[undefined, undefined, undefined, undefined]`.
  * **Paso 7:** ¿Cambió alguno?: **No**. *Por qué:* Porque `map` nunca modifica el arreglo original, siempre construye y devuelve un arreglo nuevo.
* **Control de conocimiento (Pág. 34):**
  * **Q1:** `b.length` vale **`4`** · `a[0]` después del `map` sigue valiendo **`1`**.
  * **Q2:** Marca: **`[undefined, undefined]`**
    * *Arréglalo cambiando una sola cosa:* Quitando las llaves `{ }` para que quede `const r = n.map(x => x * 3);` (o agregando `return`).
  * **Q3:** Porque `map` transforma todos los elementos uno por uno y devuelve siempre un arreglo del mismo tamaño, sin descartar ninguno.
  * **Q4:** `["ana", "beto"].map((n, i) => "Jugador " + (i + 1) + ": " + n)`
* **Auditoría con IA (Pág. 35):**
  * **Sugerencia de la IA:** Cambiar el nombre de `conPuesto` por `juegosNumerados` para que se entienda mejor qué guarda.
  * **¿La probaste?:** Sí | **Veredicto:** Acertada | **Por qué lo decidimos así:** Describe más claro el contenido, aunque dejamos `conPuesto` porque así lo pide el paso 3 de la guía.

## Nivel 7 · El colador - `filter` (Páginas 36–40)

* **Misión A (Pág. 38):**
  * **Tabla:**
    * `clasificados`: Cuántos creemos: `4` | Cuántos son: `4` | Contenido real: `[980, 640, 500, 1200]`
    * `podio`: Cuántos creemos: `2` | Cuántos son: `2` | Contenido real: `[980, 1200]`
    * `eliminados`: Cuántos creemos: `3` | Cuántos son: `3` | Contenido real: `[320, 75, 410]`
    * `Filtro imposible`: Cuántos creemos: `0` | Cuántos son: `0` | Contenido real: `[]`
* **Misión B (Pág. 39):**
  * **Tabla del Paso 5:**
    * `cabenEnLed`: `["Pinball", "Galaxia", "Karts", "Zombis", "Aereo"]` | Cuántos: `5`
    * Con la letra "o": `["Zombis", "Laberinto", "Aereo"]` | Cuántos: `3`
    * `disponibles`: `["Pinball", "Karts", "Zombis", "Aereo"]` | Cuántos: `4`
    * En mantenimiento: `["Galaxia", "Laberinto"]` (o `["mantenimiento", "mantenimiento"]`) | Cuántos: `2`
  * **Paso 6:** `juegos.filter((j, i) => estados[i] === "disponible").map(j => j.toUpperCase())`
  * **Paso 7 (Justifica):** No se podía hacer solo con `map` porque `map` no puede quitar las máquinas en mantenimiento, ni solo con `filter` porque `filter` solo selecciona elementos tal cual están y no puede cambiarlos a mayúsculas.
* **Control de conocimiento (Pág. 39):**
  * **Q1:** Marca: **`[] 0`**
    * *¿Por qué?:* Porque ningún número es mayor que 20, y cuando nadie cumple, `filter` devuelve un arreglo vacío `[]` (con `length` 0), no `undefined`.
  * **Q2:** Quedó fuera el **`0`**, porque `p * 2` no es una comparación; en JavaScript cualquier número distinto de cero cuenta como `true` y solo `0 * 2` da `0` (que se toma como `false`).
  * **Q3:** `["Ana", "Beto", "Caro"].filter(n => n.length >= 4)`
  * **Q4:** Le falta poner `[0]` al final (`b[0]`), porque `filter` siempre devuelve un arreglo aunque haya encontrado un solo elemento.
* **Auditoría con IA (Pág. 40):**
  * **Sugerencia de la IA:** En `clasificados` se incluye el 500 exacto por usar `>=`, en `cabenEnLed` se incluye el 8 por usar `<=`, y si el arreglo original estuviera vacío todos devolverían `[]`.
  * **¿La probaste?:** Sí | **Veredicto:** Acertada | **Por qué lo decidimos así:** Comprobamos en consola con `500` y `499` y funciona tal cual lo pide el corte del torneo.

## Nivel 8 · El detector - `some` y `every` (Páginas 41–45)

* **Misión A (Pág. 43):**
  * `¿Se puede abrir el salón?`: Creemos: `false` | Sale: `false` | Método: `every`
  * `¿Hay que llamar al técnico?`: Creemos: `true` | Sale: `true` | Método: `some`
  * `Con todas en true, ¿qué imprime?`: Creemos: `"ABRIR"` | Sale: `"ABRIR"` | Método: `every` y `some` dentro del `if`
* **Misión B (Pág. 44):**
  * **Tabla del Paso 5:**
    * `hayEstrella`: Predicción: `true` | Resultado: `true` | Método: `some`
    * `rondaValida`: Predicción: `false` | Resultado: `false` | Método: `every`
    * `todoEnOrden`: Predicción: `false` | Resultado: `false` | Método: `!some`
    * `Color del semáforo`: Predicción: `"ROJO"` | Resultado: `"ROJO"` | Método: `if / else if / else` con `&&`
  * **Paso 6 (El caso raro con `ronda = []`):** Sale **`"AMARILLO"`**. *¿Tiene sentido para el torneo?:* No tiene sentido real porque con cero partidas jugadas no debería marcar la ronda como válida, pero pasa porque `every` sobre un arreglo vacío siempre devuelve `true`.
  * **Paso 7:** Con `filter` y `length` da lo mismo (`true`), pero preferimos `some` porque es más corto y se detiene apenas encuentra el primer puntaje mayor a 900.
* **Control de conocimiento (Pág. 44):**
  * **Q1:** `n.some(x => x > 10)` devuelve **`true`** · `n.every(x => x > 10)` devuelve **`false`** · `n.filter(x => x > 10)` devuelve **`[16]`**.
  * **Q2:** Marca: **`false y true`**
    * *Explica el segundo resultado:* `every` busca si hay algún elemento que incumpla la condición; como el arreglo está vacío y nadie incumple, devuelve `true`.
  * **Q3:** `!averiadas.some(a => a === true)` (o `!averiadas.some(a => a)`).
  * **Q4:** Porque `some` se detiene en cuanto encuentra el primer clasificado, mientras que `filter` recorre obligatoriamente las diez mil partidas y crea otro arreglo en memoria.
* **Auditoría con IA (Pág. 45):**
  * **Sugerencia de la IA:** `todoEnOrden` escrito como `!revision.some(r => r === false)` equivale a `revision.every(r => r === true)`, y el semáforo falla si `ronda` está vacía.
  * **¿La probaste?:** Sí | **Veredicto:** Acertada | **Por qué lo decidimos así:** Lo comprobamos en el paso 6 cuando `ronda = []` dio `"AMARILLO"`.

## Nivel 9 · La torre de control - `sort` (Páginas 46–50)

* **Misión A (Pág. 48):**
  * `sort() sin comparador`: `[1200, 320, 510, 75, 980]`
  * `sort((a,b) => b - a)`: `[1200, 980, 510, 320, 75]`
  * `llegada tras las copias`: `[320, 1200, 75, 980, 510]`
  * `llegada tras ordenarla`: `[1200, 980, 510, 320, 75]`
* **Misión B (Pág. 49):**
  * **Tabla del Paso 5:**
    * Campeón: `Beto`
    * Orden alfabético: `["Ana", "Beto", "Caro", "Dani", "Elena"]`
    * Top 3 con formato: `["1. Beto - 1200 pts", "2. Dani - 980 pts", "3. Elena - 510 pts"]`
    * `jugadores` al final: Sigue en el orden original `["Ana", "Beto", "Caro", "Dani", "Elena"]`.
  * **Paso 6 (Empate):** Quedó primero **`Dani`** (el que ya estaba antes en la lista). El comparador devolvió **`0`** al restar `980 - 980`.
  * **Paso 7:** No cambió porque usamos `[...jugadores]` antes de cada `sort`.
* **Control de conocimiento (Pág. 49):**
  * **Q1:** Marca: **`[100, 25, 9]`**
    * *¿Por qué?:* Porque sin función comparadora, `sort` convierte los números a texto y los ordena alfabéticamente (`"1"` va antes que `"2"` y `"2"` antes que `"9"`).
  * **Q2:** Mayor a menor: `(a, b) => b - a` · Menor a mayor: `(a, b) => a - b`.
  * **Q3:** Pasó que `sort` muta el arreglo original directamente. Se arregla sacando una copia antes con `const copia = [...lista].sort((a, b) => a - b);`.
  * **Q4:** `lista.sort((a, b) => a.nombre.localeCompare(b.nombre))`
* **Auditoría con IA (Pág. 50):**
  * **Sugerencia de la IA:** `localeCompare` sí ordena bien nombres con tilde como `"Ángela"` y con eñe como `"Muñoz"` porque respeta el alfabeto en lugar de guiarse solo por el código ASCII.
  * **¿La probaste?:** Sí | **Veredicto:** Acertada | **Por qué lo decidimos así:** Al probar con `"Ángela"` y `"Muñoz"` en consola, `"Ángela"` quedó al principio y no al final.

## Nivel 10 · La última vuelta - `forEach` y cadenas (Páginas 51–56)

* **Misión A (Pág. 53):**
  * **Lo que devuelve `forEach`:** `undefined`.
  * **Nuestra explicación:** `map` crea y devuelve un arreglo nuevo que aquí no vamos a usar para nada, mientras que `forEach` está hecho justo para recorrer e imprimir en consola sin gastar memoria creando otra lista.
* **Misión B (Pág. 54):**
  * **Paso 3 (¿Hace falta `[...]` antes del `sort`?):** No hace falta porque `.filter()` ya nos devolvió un arreglo nuevo distinto de `partidas`, así que `.sort()` ordena esa lista filtrada sin tocar el arreglo original.
  * **Paso 6:** ¿Quedó `partidas` como al principio?: **Sí**.
    * *Cadena correcta:* `3` líneas impresas | *Por qué:* Filtra primero cuando todavía son objetos con la propiedad `.pts` y luego transforma los 3 clasificados en texto.
    * *Con `map` antes de `filter`:* `0` líneas impresas | *Por qué:* El `map` convierte los objetos en textos, y cuando entra el `filter` a buscar `p.pts >= 500`, `p.pts` es `undefined` y no pasa ninguno.
* **Control de conocimiento (Pág. 54):**
  * **Q1:** Marca: **`undefined`** · El método que habría dado `[2, 4, 6]` es **`map`**.
  * **Q2:** Orden: **`.filter` → `.map` → `.forEach`**. Primero va `.filter` para descartar de una vez a los que no aprobaron y así no transformar datos de más en el `map`.
  * **Q3:** Porque `forEach` devuelve `undefined`, y sobre `undefined` no se puede llamar ningún otro método de arreglo.
  * **Q4 (Tabla de memoria):**
    * `map`: Devuelve **un arreglo nuevo del mismo tamaño** | ¿Muta?: **No**
    * `filter`: Devuelve **un arreglo nuevo con los que cumplen (igual, más corto o `[]`)** | ¿Muta?: **No**
    * `sort`: Devuelve **el mismo arreglo ya ordenado** | ¿Muta?: **Sí**
    * `forEach`: Devuelve **`undefined`** | ¿Muta?: **No**
* **Auditoría con IA (Pág. 55):**
  * **Sugerencia de la IA:** Filtrar primero es lo más eficiente; en un millón de partidas el eslabón más costoso es `sort` porque tiene que comparar elementos entre sí varias veces ($O(n \log n)$), pero como va después de `filter` trabaja con menos datos.
  * **¿La probaste?:** Sí | **Veredicto:** Acertada | **Por qué lo decidimos así:** Tiene sentido que ordenar sea más pesado que recorrer una sola vez, y poner `filter` de primero reduce el trabajo del `sort`.

## Créditos finales · Ticket de salida 3-2-1 (Página 56)

* **3 cosas que aprendí hoy y que podría explicarle a alguien que no vino:**
  1. La diferencia entre usar `console.log` (que solo muestra algo en pantalla y deja la función dando `undefined`) y `return` (que sí entrega el valor para seguir usándolo en el código).
  2. Qué métodos modifican el arreglo original para siempre (`push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`) y cuáles crean un arreglo nuevo sin dañar el original (`map`, `filter`).
  3. Cómo encadenar `.filter()`, `.sort()`, `.map()` y `.forEach()` en orden para filtrar datos, ordenarlos, darles formato e imprimirlos sin hacer varios ciclos `for` a mano.
* **2 errores que ya no voy a cometer:**
  1. Ponerle llaves `{ }` a una función flecha dentro de un `map` o `filter` y olvidar escribir `return`, haciendo que todo salga `undefined`.
  2. Usar `.sort()` directamente sobre un arreglo de números sin pasarle el comparador `(a, b) => a - b` o sin hacerle copia con `[...lista]`.
* **1 pregunta que todavía tengo sobre funciones o arreglos:**
  1. ¿Cómo funciona exactamente `.reduce()` cuando queremos agrupar o contar objetos complejos en vez de solo sumar números?
