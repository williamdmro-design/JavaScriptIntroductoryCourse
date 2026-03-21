/*
Este archivo cubre todos los escenarios posibles de los constructos lógicos en JavaScript:

1. Comparaciones: == (con coerción) vs === (estricta), y otros operadores relacionales
2. Operadores lógicos: &&, ||, ! y sus combinaciones
3. Condicionales: if-else if-else con diferentes flujos de ejecución
4. Switch: casos coincidentes, default, fall-through, con números y strings
5. Operador ternario: condiciones true/false, anidado, asignaciones

Cada escenario incluye ejemplos prácticos con console.log para demostrar el comportamiento.
*/

// =============================================================================
//* 1. OPERADORES DE COMPARACIÓN: == vs ===
// =============================================================================

// El operador == compara valores, permitiendo coerción de tipos (conversión automática)
// El operador === compara valores y tipos estrictamente (sin coerción)

// Escenario 1: Comparación con números y strings (coerción permitida con ==)
console.log("ESCENARIO 1: Comparación con coerción (==)");
const evaluacion_izquierda = 7 + 3; // 10 (número)
let evaluacion_derecha = 10; // 10 (número)
console.log("10 == 10 (números):", evaluacion_izquierda == evaluacion_derecha); // true

evaluacion_derecha = "10"; // "10" (string)
console.log("10 == '10' (número vs string):", evaluacion_izquierda == evaluacion_derecha); // true (coerción)

// Escenario 2: Comparación estricta sin coerción (===)
console.log("\nESCENARIO 2: Comparación estricta (===)");
console.log("10 === 10 (números):", evaluacion_izquierda === 10); // true
console.log("10 === '10' (número vs string):", evaluacion_izquierda === "10"); // false (tipos diferentes)

// Escenario 3: Otros operadores de comparación (<, >, <=, >=, !=, !==)
console.log("\nESCENARIO 3: Otros operadores de comparación");
const a = 5, b = 10, c = 5;
console.log("5 < 10:", a < b); // true
console.log("10 > 5:", b > a); // true
console.log("5 <= 5:", a <= c); // true
console.log("5 >= 5:", a >= c); // true
console.log("5 != 10:", a != b); // true
console.log("5 !== '5':", a !== "5"); // true (tipos diferentes)

// =============================================================================
//* 2. OPERADORES LÓGICOS: && (AND), || (OR), ! (NOT)
// =============================================================================

// Escenario 1: Operador AND (&&) - Verdadero solo si ambas condiciones son true
console.log("\nESCENARIO 4: Operador AND (&&)");
const condicion_izquierda = 5 > 3; // true
const condicion_derecha = 10 < 20; // true
console.log("true && true:", condicion_izquierda && condicion_derecha); // true

console.log("true && false:", 5 > 3 && 10 > 20); // false
console.log("false && true:", 5 < 3 && 10 < 20); // false
console.log("false && false:", 5 < 3 && 10 > 20); // false

// Escenario 2: Operador OR (||) - Verdadero si al menos una condición es true
console.log("\nESCENARIO 5: Operador OR (||)");
console.log("true || true:", 5 > 3 || 10 < 20); // true
console.log("true || false:", 5 > 3 || 10 > 20); // true
console.log("false || true:", 5 < 3 || 10 < 20); // true
console.log("false || false:", 5 < 3 || 10 > 20); // false

// Escenario 3: Operador NOT (!) - Niega el valor booleano
console.log("\nESCENARIO 6: Operador NOT (!)");
console.log("!true:", !true); // false
console.log("!false:", !false); // true
console.log("!(5 > 3):", !(5 > 3)); // false
console.log("!(5 < 3):", !(5 < 3)); // true

// Escenario 4: Combinación de operadores lógicos
console.log("\nESCENARIO 7: Combinación de operadores lógicos");
console.log("(true && false) || true:", (true && false) || true); // true
console.log("!(true || false) && true:", !(true || false) && true); // false

// =============================================================================
//* 3. CONDICIONALES IF-ELSE IF-ELSE
// =============================================================================

// Escenario 1: Todas las condiciones evaluadas secuencialmente
console.log("\nESCENARIO 8: If-else if-else básico");
const num1 = 10;
const num2 = 5;
const num3 = 10;
const num4 = 30;

if (num1 > num4) {
    console.log("num1 > num4: Primera condición verdadera");
} else if (num2 < num3) {
    console.log("num2 < num3: Segunda condición verdadera");
} else if (num1 == num4) {
    console.log("num1 == num4: Tercera condición verdadera");
} else if (num1 == num3) {
    console.log("num1 == num3: Cuarta condición verdadera");
} else {
    console.log("Ninguna condición es verdadera");
}
// Resultado: "num2 < num3: Segunda condición verdadera"

// Escenario 2: Primera condición verdadera
console.log("\nESCENARIO 9: Primera condición verdadera");
if (30 > 10) {
    console.log("30 > 10: Primera condición verdadera");
} else if (5 < 10) {
    console.log("Segunda condición (no se ejecuta)");
}
// Resultado: "30 > 10: Primera condición verdadera"

// Escenario 3: Ninguna condición verdadera
console.log("\nESCENARIO 10: Ninguna condición verdadera");
if (10 > 30) {
    console.log("Primera condición");
} else if (5 > 10) {
    console.log("Segunda condición");
} else {
    console.log("Ninguna condición es verdadera - ejecuta else");
}

// Escenario 4: If anidado
console.log("\nESCENARIO 11: If anidado");
if (num1 === num3) {
    console.log("num1 === num3");
    if (num2 < num4) {
        console.log("Y además num2 < num4");
    }
}

// =============================================================================
//* 4. SWITCH STATEMENT
// =============================================================================

// Escenario 1: Caso coincidente con break
console.log("\nESCENARIO 12: Switch con caso coincidente");
let posicionCarrera = 1;
switch (posicionCarrera) {
    case 1:
        console.log("Oro");
        break;
    case 2:
        console.log("Plata");
        break;
    case 3:
        console.log("Bronce");
        break;
    default:
        console.log("Siga intentando");
}
// Resultado: "Oro"

// Escenario 2: Caso no coincidente - default
console.log("\nESCENARIO 13: Switch con default");
posicionCarrera = 5;
switch (posicionCarrera) {
    case 1:
        console.log("Oro");
        break;
    case 2:
        console.log("Plata");
        break;
    case 3:
        console.log("Bronce");
        break;
    default:
        console.log("Siga intentando");
}
// Resultado: "Siga intentando"

// Escenario 3: Sin break - fall-through
console.log("\nESCENARIO 14: Switch sin break (fall-through)");
posicionCarrera = 2;
switch (posicionCarrera) {
    case 1:
        console.log("Oro");
    case 2:
        console.log("Plata");
    case 3:
        console.log("Bronce");
    default:
        console.log("Siga intentando");
}
// Resultado: "Plata", "Bronce", "Siga intentando"

// Escenario 4: Switch con strings
console.log("\nESCENARIO 15: Switch con strings");
let color = "rojo";
switch (color) {
    case "rojo":
        console.log("Color primario");
        break;
    case "verde":
        console.log("Color secundario");
        break;
    default:
        console.log("Otro color");
}
// Resultado: "Color primario"

// =============================================================================
//* 5. OPERADOR TERNARIO (CONDICIONAL)
// =============================================================================

// Sintaxis: condición ? valor_si_verdadero : valor_si_falso

// Escenario 1: Condición verdadera
console.log("\nESCENARIO 16: Operador ternario - condición verdadera");
let estaLloviendo = "Esta lloviendo";
estaLloviendo = (estaLloviendo === "Esta lloviendo") ? true : false;
console.log("estaLloviendo:", estaLloviendo); // true

// Escenario 2: Condición falsa
console.log("\nESCENARIO 17: Operador ternario - condición falsa");
let esDeDia = "Es de noche";
esDeDia = (esDeDia === "Es de dia") ? true : false;
console.log("esDeDia:", esDeDia); // false

// Escenario 3: Ternario anidado
console.log("\nESCENARIO 18: Operador ternario anidado");
let edad = 20;
let categoria = edad < 13 ? "Niño" : edad < 18 ? "Adolescente" : "Adulto";
console.log("Categoría para edad", edad + ":", categoria); // "Adulto"

// Escenario 4: Usando ternario para asignar valores
console.log("\nESCENARIO 19: Ternario para asignación");
let numero = 15;
let parOImpar = numero % 2 === 0 ? "par" : "impar";
console.log("El número", numero, "es", parOImpar); // "impar"

// Escenario 5: Usando ternario con variable booleana
console.log("\nESCENARIO 20: Ternario con variable booleana");
let esUsuarioActivo = true;
let mensajeEstado = esUsuarioActivo ? "Usuario activo" : "Usuario inactivo";
console.log("Estado del usuario:", mensajeEstado); // "Usuario activo"

esUsuarioActivo = false;
mensajeEstado = esUsuarioActivo ? "Usuario activo" : "Usuario inactivo";
console.log("Estado del usuario:", mensajeEstado); // "Usuario inactivo"