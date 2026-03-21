console.log("\n=== 1. CICLO FOR TRADICIONAL ===\n");

/*
   El ciclo FOR es útil cuando:
   - Necesitas controlar exactamente las iteraciones
   - Necesitas acceder al índice de cada elemento
   - Quieres saltar elementos o cambiar la dirección del ciclo
   - Conoces exactamente cuántas veces se ejecutará

   Sintaxis: for(inicialización; condición; incremento/decremento)
*/

let numeros = [10, 20, 30, 40];

console.log("Ejemplo básico de ciclo for:");
for (let i = 0; i < numeros.length; i++) {
    console.log(`Posición ${i}: ${numeros[i]}`);
}

// Ejemplo: Contar hacia atrás
console.log("\nContando hacia atrás:");
for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log("\n=== 2. CICLO WHILE ===\n");

/*
   El ciclo WHILE es útil cuando:
   - No sabes exactamente cuántas veces se ejecutará el ciclo
   - La condición depende de variables que cambian dentro del ciclo
   - Quieres que el ciclo se ejecute mientras una condición sea verdadera

   Sintaxis: while(condición)
   ¡Cuidado! Si la condición nunca se vuelve false, tendrás un ciclo infinito
*/

console.log("Ejemplo de ciclo while:");
let energia = 100;
let intentos = 0;

while (energia > 0) {
    console.log(`Trabajando... Energía restante: ${energia}`);
    energia -= 25; // Se detendrá cuando llegue a 0
    intentos++;
}

console.log(`Trabajo completado en ${intentos} intentos`);

// Ejemplo: Adivinar un número
console.log("\nJuego de adivinar (simulado):");
let numeroSecreto = 7;
let intento = 1;

while (intento !== numeroSecreto) {
    console.log(`Intento ${intento}: No es correcto`);
    intento++;
    if (intento > 10) break; // Evitar ciclo infinito
}
console.log(`¡Encontrado! El número era ${numeroSecreto}`);

console.log("\n=== 2.5 CICLO DO WHILE ===\n");

/*
   El ciclo DO WHILE es similar al WHILE, pero con una diferencia importante:
   - El código se ejecuta AL MENOS UNA VEZ, sin importar la condición
   - Después de la primera ejecución, verifica la condición para continuar
   - Útil cuando necesitas ejecutar algo al menos una vez

   Sintaxis:
   do {
       // código a ejecutar
   } while (condición);

   DIFERENCIA CON WHILE:
   - while: verifica la condición ANTES de ejecutar
   - do while: ejecuta PRIMERO, luego verifica la condición
*/

console.log("Ejemplo básico de do while:");

let contador = 1;

do {
    console.log(`Ejecución número: ${contador}`);
    contador++;
} while (contador <= 5);

console.log("\nComparación entre while y do while:");

console.log("--- Usando WHILE con condición falsa desde el inicio ---");
let numeroWhile = 10;

while (numeroWhile < 5) {
    console.log("Esto nunca se ejecutará con while");
}

console.log("--- Usando DO WHILE con la misma condición ---");
let numeroDoWhile = 10;

do {
    console.log("Esto SÍ se ejecuta al menos una vez con do while");
} while (numeroDoWhile < 5);

console.log("\nEjemplo práctico: Menú de opciones");

function mostrarMenu() {
    let opcion;

    do {
        console.log("\n=== MENÚ PRINCIPAL ===");
        console.log("1. Ver perfil");
        console.log("2. Configuración");
        console.log("3. Salir");
        console.log("Selecciona una opción (1-3):");

        // Simulamos entrada del usuario (en la vida real usarías prompt() o input)
        opcion = Math.floor(Math.random() * 3) + 1; // Número aleatorio entre 1-3
        console.log(`Usuario seleccionó: ${opcion}`);

        switch(opcion) {
            case 1:
                console.log("Mostrando perfil...");
                break;
            case 2:
                console.log("Abriendo configuración...");
                break;
            case 3:
                console.log("¡Hasta luego!");
                break;
            default:
                console.log("Opción no válida");
        }

    } while (opcion !== 3); // Se ejecuta al menos una vez, luego verifica si quiere salir
    console.log("Programa terminado.");
}

// mostrarMenu(); // Descomentado para ejecutar

console.log("\nEjemplo: Validación de entrada");

function validarEdad() {
    let edad;
    let intentos = 0;

    do {
        // Simulamos entrada del usuario
        edad = Math.floor(Math.random() * 120); // Edad aleatoria 0-119
        intentos++;

        console.log(`Intento ${intentos}: Edad ingresada = ${edad}`);

        if (edad < 0 || edad > 120) {
            console.log("Edad inválida. Intente nuevamente.");
        } else if (edad < 18) {
            console.log("Debes ser mayor de edad para continuar.");
        } else {
            console.log("Edad válida. Acceso concedido.");
        }

    } while ((edad < 0 || edad > 120 || edad < 18) && intentos < 5);

    if (intentos >= 5) {
        console.log("Demasiados intentos fallidos. Acceso denegado.");
    }
}

// validarEdad(); // Descomentado para ejecutar

console.log("\n=== 3. MÉTODO FOREACH ===\n");

/*
   forEach es un método de arrays que ejecuta una función para cada elemento.
   Es más moderno y legible que el ciclo for tradicional.

   Sintaxis: array.forEach(function(elemento, indice, array) { ... })

   Ventajas:
   - No necesitas manejar índices manualmente
   - Es más declarativo (dices QUÉ hacer, no CÓMO)
   - No puedes modificar accidentalmente el array original
*/

const frutas = ['manzana', 'banana', 'naranja', 'uva'];

console.log("Ejemplo básico de forEach:");
frutas.forEach(function(fruta) {
    console.log(`Me gusta la ${fruta}`);
});

// Con función flecha (más moderna)
console.log("\nUsando función flecha:");
frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));

// Accediendo al índice
console.log("\nCon índice:");
frutas.forEach((fruta, indice) => {
    console.log(`${indice + 1}. ${fruta}`);
});

// Ejemplo práctico: Calcular total de compras
const precios = [25, 15, 30, 10];
let total = 0;

// Vuelta 1 
// Elemento: 25, Índice: 0 -> total = 0 + 25 = 25
// Vuelta 2
// Elemento: 15, Índice: 1 -> total = 25 + 15 = 40
// Vuelta 3
// Elemento: 30, Índice: 2 -> total = 40 + 30 = 70
// Vuelta 4
// Elemento: 10, Índice: 3 -> total = 70 + 10 = 80

console.log("\nCalculando total de compras:");
precios.forEach((precio, indice) => {
    console.log(`Producto ${indice + 1}: $${precio}`);
    total += precio; // total = total + precio 
});
console.log(`Total: $${total}`);

console.log("\n=== 4. MÉTODO MAP ===\n");

/*
   map() crea un NUEVO array aplicando una función a cada elemento del array original.
   Es perfecto para transformar datos.

   Sintaxis: array.map(function(elemento, indice, array) { return nuevoElemento; })

   Características:
   - SIEMPRE devuelve un nuevo array
   - El array original NO se modifica
   - La longitud del nuevo array es igual al original
   - Es ideal para transformar datos
*/

const numerosOriginales = [1, 2, 3, 4, 5];

console.log("Array original:", numerosOriginales);

// Elevar al cuadrado
const cuadrados = numerosOriginales.map(function(num) {
    return num * num;
});
console.log("Cuadrados:", cuadrados);

// Convertir números a strings
const strings = numerosOriginales.map(num => `Número: ${num}`);
console.log("Como strings:", strings);

// Aplicar descuento a precios
const preciosOriginales = [100, 200, 300, 400];
const preciosConDescuento = preciosOriginales.map(precio => precio * 0.9);
console.log("\nPrecios originales:", preciosOriginales);
console.log("Con 10% descuento:", preciosConDescuento);

// Transformar objetos
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Carlos", edad: 22 }
];

const nombres = personas.map(persona => persona.nombre);
const edades = personas.map(persona => persona.edad);

console.log("\nPersonas:", personas);
console.log("Solo nombres:", nombres);
console.log("Solo edades:", edades);

console.log("\n=== 5. MÉTODO FILTER ===\n");

/*
   filter() crea un NUEVO array con solo los elementos que cumplen una condición.
   Es perfecto para seleccionar elementos específicos.

   Sintaxis: array.filter(function(elemento, indice, array) { return condición; })

   Características:
   - Devuelve un nuevo array (puede ser más corto que el original)
   - El array original NO se modifica
   - Solo incluye elementos donde la función devuelve true
*/

const edadesMixtas = [15, 25, 8, 35, 12, 40, 18, 22];

console.log("Edades completas:", edadesMixtas);

// Filtrar mayores de edad
const mayoresDeEdad = edadesMixtas.filter(function(edad) {
    return edad >= 18;
});
console.log("Mayores de 18:", mayoresDeEdad);

// Filtrar números pares
const pares = edadesMixtas.filter(edad => edad % 2 === 0);
console.log("Edades pares:", pares);

// Filtrar números mayores que 20
const mayoresQue20 = edadesMixtas.filter(edad => edad > 20);
console.log("Mayores que 20:", mayoresQue20);

// Ejemplo con objetos
const productos = [
    { nombre: "Laptop", precio: 800, categoria: "electrónica" },
    { nombre: "Mouse", precio: 20, categoria: "electrónica" },
    { nombre: "Libro", precio: 15, categoria: "educación" },
    { nombre: "Teclado", precio: 60, categoria: "electrónica" },
    { nombre: "Cuaderno", precio: 5, categoria: "educación" }
];

console.log("\nProductos:", productos);

// Filtrar productos caros (>50)
const productosCaros = productos.filter(producto => producto.precio > 50);
console.log("Productos caros:", productosCaros);

// Filtrar por categoría
const electronicos = productos.filter(producto => producto.categoria === "electrónica");
console.log("Electrónicos:", electronicos);

// Filtrar productos baratos (<30) y educativos
const baratosEducativos = productos.filter(producto =>
    producto.precio < 30 && producto.categoria === "educación"
);
console.log("Baratos y educativos:", baratosEducativos);

console.log("\n=== 6. COMBINANDO MÉTODOS: FOREACH, MAP Y FILTER ===\n");

/*
   Los métodos funcionales se pueden encadenar para operaciones complejas.
   El orden importa: filter primero, luego map, luego forEach para mostrar resultados.
*/

console.log("Ejemplo: Procesar calificaciones de estudiantes");

// Datos de estudiantes
const estudiantes = [
    { nombre: "Juan", calificacion: 85 },
    { nombre: "Ana", calificacion: 92 },
    { nombre: "Carlos", calificacion: 78 },
    { nombre: "Laura", calificacion: 96 },
    { nombre: "Pedro", calificacion: 67 },
    { nombre: "María", calificacion: 88 }
];

console.log("Estudiantes originales:", estudiantes);

// 1. Filtrar aprobados (calificación >= 70)
// 2. Agregar letra de calificación
// 3. Mostrar resultados
estudiantes
    .filter(estudiante => estudiante.calificacion >= 70) // Solo aprobados
    .map(estudiante => ({
        nombre: estudiante.nombre,
        calificacion: estudiante.calificacion,
        letra: estudiante.calificacion >= 90 ? 'A' :
               estudiante.calificacion >= 80 ? 'B' : 'C'
    })) // Agregar letra
    .forEach(estudiante => {
        console.log(`${estudiante.nombre}: ${estudiante.calificacion} (${estudiante.letra})`);
    }); // Mostrar

console.log("\n=== 7. DIFERENCIAS ENTRE CICLOS Y MÉTODOS FUNCIONALES ===\n");

/*
   CICLOS TRADICIONALES (for, while):
   + Control total sobre el flujo
   + Pueden modificar el array original
   + Más eficientes para operaciones simples
   - Más código, más propenso a errores
   - Menos legible

   MÉTODOS FUNCIONALES (forEach, map, filter):
   + Más legibles y declarativos
   + Menos propensos a errores
   + Fáciles de encadenar
   - No modifican el array original (excepto forEach puede tener efectos secundarios)
   - Menos control sobre el flujo
   - Pueden ser menos eficientes para arrays muy grandes
*/

// CUÁNDO USAR CADA UNO:
// - for/while: Cuando necesitas control preciso o modificar el array
// - forEach: Para ejecutar acciones en cada elemento
// - map: Para transformar cada elemento en uno nuevo
// - filter: Para seleccionar elementos que cumplen una condición

console.log("\n=== 8. EXPLICACIÓN DE OPERADORES ESPECIALES ===\n");

/*
   En este archivo hemos usado varios operadores especiales.
   Vamos a explicar cada uno con detalle (sin usar funciones por ahora):
*/

console.log("\n--- 1. OPERADOR DE ASIGNACIÓN DE RESTA (-=) ---");

/*
   El operador -= es un operador de asignación compuesta.
   Es una forma abreviada de restar un valor a una variable.

   Sintaxis: variable -= valor
   Equivalente a: variable = variable - valor

   Otros operadores similares:
   += (suma), *= (multiplicación), /= (división), %= (módulo)
*/

console.log("Ejemplos del operador -=:");

let energia2 = 100;
console.log("Energía inicial:", energia2);

// Usando -=
energia2 -= 25; // Equivalente a: energia2 = energia2 - 25
console.log("Después de -= 25:", energia2);

energia2 -= 30; // Equivalente a: energia2 = energia2 - 30
console.log("Después de -= 30:", energia2);

// Comparación con la sintaxis completa
let energia3 = 100;
console.log("\nComparación con sintaxis completa:");
console.log("Energía inicial:", energia3);
energia3 = energia3 - 25;
console.log("Después de energia3 = energia3 - 25:", energia3);

// Otros operadores de asignación compuesta
console.log("\nOtros operadores de asignación compuesta:");
let puntos = 50;
console.log("Puntos iniciales:", puntos);

puntos += 10; // puntos = puntos + 10
console.log("Después de += 10:", puntos);

puntos *= 2;  // puntos = puntos * 2
console.log("Después de *= 2:", puntos);

puntos /= 4;  // puntos = puntos / 4
console.log("Después de /= 4:", puntos);

console.log("\n--- 2. OPERADOR DE INCREMENTO (++) ---");

/*
   El operador ++ incrementa el valor de una variable en 1.
   Es una forma abreviada de sumar 1 a una variable.

   Sintaxis: variable++
   Equivalente a: variable = variable + 1

   Existen dos formas:
   - i++ (post-incremento): usa el valor actual, luego incrementa
   - ++i (pre-incremento): incrementa primero, luego usa el valor

   En ciclos for, ambas formas son equivalentes.
*/

console.log("Ejemplos del operador ++:");

// En un ciclo for (la forma más común)
console.log("Ciclo for con i++:");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteración ${i}`);
}

// Diferencia entre ++i y i++
console.log("\nDiferencia entre ++i y i++:");

let a = 5;
let b = 5;

console.log("Valor inicial de a:", a);
console.log("Valor inicial de b:", b);

console.log("\nUsando post-incremento (i++):");
console.log("a++ devuelve:", a++); // Devuelve 5, luego incrementa a 6
console.log("Ahora a vale:", a);

console.log("\nUsando pre-incremento (++i):");
console.log("++b devuelve:", ++b); // Incrementa a 6, luego devuelve 6
console.log("Ahora b vale:", b);

// En la práctica del ciclo for, no hay diferencia
console.log("\nEn ciclos for, ambas formas funcionan igual:");
console.log("Con i++:");
for (let i = 1; i <= 3; i++) {
    console.log("i =", i);
}

console.log("Con ++i:");
for (let i = 1; i <= 3; ++i) {
    console.log("i =", i);
}

// Ejemplo práctico: contador de visitas
console.log("\nEjemplo práctico - Contador de visitas:");
let visitas = 0;

// Simulando visitas (sin usar funciones)
visitas++; // Equivalente a: visitas = visitas + 1
console.log(`Visita número ${visitas} registrada`);

visitas++; // Equivalente a: visitas = visitas + 1
console.log(`Visita número ${visitas} registrada`);

visitas++; // Equivalente a: visitas = visitas + 1
console.log(`Visita número ${visitas} registrada`);

console.log(`\nTotal de visitas: ${visitas}`);

console.log("\n--- 3. FUNCIÓN FLECHA (=>) - CONCEPTOS BÁSICOS ---");

/*
   La función flecha (=>) es una sintaxis moderna que verás más adelante.
   Por ahora, solo necesitas saber que es una forma abreviada de escribir
   cierto tipo de expresiones en métodos de arrays.

   En los ejemplos anteriores, cuando ves:
   - frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));
   - numeros.map(num => num * num)

   El símbolo => es parte de la sintaxis moderna, pero el concepto
   de funciones se explicará más adelante en el curso.
*/

// === RESUMEN DE OPERADORES ===

// -= (asignación de resta): Resta y asigna en un paso
//    Sintaxis: variable -= valor
//    Ejemplo: energia -= 25  (energia = energia - 25)

// ++ (incremento): Aumenta el valor en 1
//    Sintaxis: variable++ o ++variable
//    Ejemplo: i++  (i = i + 1)

// => (función flecha): Sintaxis moderna (se explica más adelante)
//    Aparece en métodos como forEach, map, filter

// Otros operadores de asignación compuesta:
// += (suma), *= (multiplicación), /= (división), %= (módulo)