console.log("Hola mundo")

// Comentario

/* 
Comentario
en bloque
*/

/* Declaracion de variables */
let var0
var0 = 0
console.log(var0);

let var1 = 1
console.log(var1)

let var2, var3

/* LET: variables locales de alcance el bloque donde estan definidas */
console.log("--- LET ---");
let x = 1

if (x === 1) {
    let x = 2
    console.log(x)
}
console.log(x)


/* VAR: variables globales */
console.log("--- VAR ---");
var y = 1

if (y === 1) {
    var y = 2
    console.log(y)
}
console.log(y)

/* CONST: para constantes */
console.log("--- CONST ---");
const number = 5

let cosa = number * 5
console.log(number);
console.log(cosa);

// number = 10; // error
