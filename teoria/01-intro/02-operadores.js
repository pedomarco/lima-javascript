/* Operados artimeticos */
let a = 5
let b = 10

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

console.log(a % b); // Modulo
console.log(a ** b); // Exponente

a++ // Incremento
console.log(a);

a-- // Decremento
console.log(a);


/* Operadores de asignacion */
let miVariable = 2
console.log(miVariable);

miVariable += 2
miVariable *= 2
miVariable /= 2
miVariable %= 2
miVariable **= 2

console.log(miVariable);


/* Operadores de comparacion */
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == 5); // Igualdad por valor
console.log(a == "5");
console.log(a === "5"); // Igualdad por identidad (tipo y valor) o estricta
console.log(a === 5);
console.log(a != 5); // Desigualdad por valor
console.log(a != "5");
console.log(a !== 5); // Desigualdad por identidad

console.log("----------- TRUTHY y FALSY -----------");

console.log(0 == false)
console.log(1 == true)
console.log(0 == " ")
console.log(0 == "")
console.log(0 == "asdf")
console.log(0 === "")
console.log(undefined == null)
console.log(undefined === null)


/* Operadores logicos */
console.log("----------- LOGICOS -----------");
// AND (&&)
console.log(5 < 10 && 15 > 20);

// OR (||)
console.log(5 < 10 || 15 > 20);

// NOT (!)
console.log(!true);







