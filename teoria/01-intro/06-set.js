/* Sets */

// Declaracion e inicializacion
let miSet = new Set()
console.log(miSet);

miSet = new Set(["hola", "pepito", 4, true])
let miArray = new Array("hola", "pepito", 4, true)

console.log(miSet);
console.log(miArray);

// Los sets, a diferencia de los arrays, no admiten duplicados
miArray.push("hola")
miSet.add("hola")
miSet.add("asdf")

console.log(miArray);
console.log(miSet);

// Metodos comunes

miSet.add("nuevo valor") // añadir nuevo valor

console.log(miSet);

miSet.delete(4) // eliminar cierto valor
miSet.delete('pepito')

console.log(miSet);

console.log(miSet.has("hola")); // comprobar si un valor existe en el set
console.log(miSet.has("asdfg"));

console.log(miSet.size); // tamaño del set

// Pasar de array a set: constructor
miSet2 = new Set(["hola", "hola", "pepito", 4, true])
console.log(miSet2);

// Pasa de set a array
let miArray2 = Array.from(miSet2)
console.log(miArray2);



