console.log("\n=== 1. CREACIÓN Y ACCESO BÁSICO A ARRAYS ===\n");

/*
   UN ARRAY ES UNA COLECCIÓN ORDENADA DE ELEMENTOS
   - Cada elemento tiene una posición llamada "índice"
   - Los índices comienzan desde 0
   - Los arrays pueden contener cualquier tipo de dato
*/

// Crear un arreglo simple
const frutas = ['manzana', 'banana', 'naranja'];
// Posiciones:      0          1          2

console.log("Array de frutas:", frutas);
console.log("Número de elementos (longitud):", frutas.length);

// Acceder a elementos individuales usando corchetes []
console.log("Primera fruta (índice 0):", frutas[0]); // 'manzana'
console.log("Segunda fruta (índice 1):", frutas[1]); // 'banana'
console.log("Tercera fruta (índice 2):", frutas[2]); // 'naranja'

// Los arrays pueden contener diferentes tipos de datos
const mixto = [1, 'texto', true, null];
console.log("\nArray con tipos mixtos:", mixto);

// Diferencia entre propiedad length en strings vs arrays
let fruta = frutas[0]; // "manzana" (es un string)
console.log("\nComparación de .length:");
console.log("Longitud del string 'manzana':", fruta.length); // 7 caracteres
console.log("Longitud del array frutas:", frutas.length); // 3 elementos

console.log("\n=== 2. MÉTODOS DE MODIFICACIÓN DE ARRAYS ===\n");

/*
   MÉTODOS QUE CAMBIAN EL ARRAY ORIGINAL:
   - push(): Agrega elementos al FINAL
   - pop(): Elimina el último elemento
   - unshift(): Agrega elementos al INICIO
   - shift(): Elimina el primer elemento
*/

// Simulamos una fila de personas para entender estos métodos
let fila = ["Ana", "Juan"];
console.log("Fila inicial:", fila);
console.log("Personas en la fila:", fila.length);

// PUSH: Agrega un elemento al FINAL del array
console.log("\n--- MÉTODO PUSH ---");
console.log("Llega alguien nuevo al final de la fila...");
fila.push("Elena"); // ["Ana", "Juan", "Elena"]
console.log("Fila después de push('Elena'):", fila);
console.log("Nueva longitud:", fila.length);

// SHIFT: Elimina el PRIMER elemento del array
console.log("\n--- MÉTODO SHIFT ---");
console.log("Atendemos al primero de la fila...");
let atendido = fila.shift(); // "Ana" -> queda ["Juan", "Elena"]
console.log("Persona atendida:", atendido);
console.log("Fila después de shift():", fila);

// UNSHIFT: Agrega un elemento al INICIO del array
console.log("\n--- MÉTODO UNSHIFT ---");
console.log("Alguien con prioridad llega y entra al inicio...");
fila.unshift("Jefe"); // ["Jefe", "Juan", "Elena"]
console.log("Fila después de unshift('Jefe'):", fila);
console.log("Nueva longitud:", fila.length);

// POP: Elimina el ÚLTIMO elemento del array
console.log("\n--- MÉTODO POP ---");
console.log("El último de la fila decide irse...");
let ultimaPersona = fila.pop(); // "Elena" -> queda ["Jefe", "Juan"]
console.log("Persona que se fue:", ultimaPersona);
console.log("Fila final:", fila);
console.log("Longitud final:", fila.length);

console.log("\n=== 3. MÉTODOS DE BÚSQUEDA Y EXTRACCIÓN ===\n");

/*
   MÉTODOS PARA BUSCAR Y EXTRAER ELEMENTOS:
   - includes(): Verifica si un elemento existe
   - indexOf(): Encuentra la posición de un elemento
   - slice(): Extrae una porción SIN modificar el original
   - splice(): Modifica el array original (elimina/agrega elementos)
*/

let cajaDeHerramientas = ["Martillo", "Taladro", "Sierra", "Lijadora"];
console.log("Caja de herramientas inicial:", cajaDeHerramientas);

// INCLUDES: Verifica si un elemento existe en el array
console.log("\n--- MÉTODO INCLUDES ---");
console.log("¿Tenemos un taladro?", cajaDeHerramientas.includes("Taladro")); // true
console.log("¿Tenemos una motosierra?", cajaDeHerramientas.includes("Motosierra")); // false

// INDEXOF: Encuentra la posición (índice) de un elemento
console.log("\n--- MÉTODO INDEXOF ---");
if (cajaDeHerramientas.includes("Taladro")) {
    let posicion = cajaDeHerramientas.indexOf("Taladro");
    console.log(`El taladro está en el índice ${posicion}`);
}

// SLICE: Extrae una porción del array SIN modificar el original
console.log("\n--- MÉTODO SLICE ---");
console.log("Sacamos los dos primeros elementos para un kit básico...");

/*
   ¿POR QUÉ SLICE NO INCLUYE EL ELEMENTO DE LA POSICIÓN FINAL?

   El método slice(inicio, fin) funciona con el principio "hasta pero no incluyendo"
   - inicio: índice donde comienza la extracción (INCLUIDO)
   - fin: índice donde TERMINA la extracción (NO INCLUIDO)

   Esto se debe a que slice extrae elementos desde 'inicio' hasta 'fin-1'
   Es similar a cómo funcionan los rangos en matemáticas: [inicio, fin)

   Ejemplos:
   - slice(0, 2) → elementos en posiciones 0 y 1 (2 elementos)
   - slice(1, 4) → elementos en posiciones 1, 2 y 3 (3 elementos)
   - slice(2) → desde posición 2 hasta el final (sin límite superior)
*/

let kitBasico = cajaDeHerramientas.slice(0, 2); // Desde índice 0 hasta 2 (no incluye 2)
console.log("Kit básico (copia):", kitBasico); // ["Martillo", "Taladro"]
console.log("Caja original (sin cambios):", cajaDeHerramientas);

// Ejemplos adicionales para entender mejor slice
console.log("\n--- EJEMPLOS ADICIONALES DE SLICE ---");
let ejemplo = ["A", "B", "C", "D", "E"];
console.log("Array completo:", ejemplo);

console.log("slice(1, 3):", ejemplo.slice(1, 3)); // ["B", "C"] - posiciones 1 y 2
console.log("slice(2, 4):", ejemplo.slice(2, 4)); // ["C", "D"] - posiciones 2 y 3
console.log("slice(1):", ejemplo.slice(1));     // ["B", "C", "D", "E"] - desde 1 hasta el final
console.log("slice(0, -1):", ejemplo.slice(0, -1)); // ["A", "B", "C", "D"] - excluye el último

// SPLICE: Modifica el array ORIGINAL, puede eliminar y/o agregar elementos
console.log("\n--- MÉTODO SPLICE ---");
console.log("Reemplazamos 'Sierra' por 'Destornillador' y 'Pinzas'...");
console.log("Antes:", cajaDeHerramientas);
// Parámetros: splice(posición_inicial, cantidad_a_eliminar, elementos_a_agregar...)
cajaDeHerramientas.splice(2, 1, "Destornillador", "Pinzas");
// Eliminamos 1 elemento en posición 2 ("Sierra") y agregamos 2 nuevos
console.log("Después:", cajaDeHerramientas);
// Resultado: ["Martillo", "Taladro", "Destornillador", "Pinzas", "Lijadora"]

// EJEMPLO PRÁCTICO FINAL
console.log("\n=== EJEMPLO PRÁCTICO: GESTIÓN DE UNA BIBLIOTECA ===\n");

let libros = ["El Quijote", "1984", "Cien años de soledad"];
console.log("Libros iniciales:", libros);

// Un usuario devuelve un libro
libros.push("El principito");
console.log("Después de devolver 'El principito':", libros);

// Otro usuario toma prestado el primer libro
let libroPrestado = libros.shift();
console.log(`Libro prestado: ${libroPrestado}`);
console.log("Libros restantes:", libros);

// Verificar si tenemos un libro específico
if (libros.includes("1984")) {
    console.log("¡Tenemos '1984' disponible!");
}

// Crear una selección de los primeros 2 libros
let seleccion = libros.slice(0, 2);
console.log("Selección especial:", seleccion);
console.log("Colección completa sigue intacta:", libros);