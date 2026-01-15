/* Array */

// Declaracion
let miArray = []
let miArray2 = new Array()

console.log(miArray);
console.log(miArray2);

// Inicialización
miArray = [3]
miArray2 = new Array(3)

console.log(miArray);
console.log(miArray2);

miArray = [1,2,3,4]
miArray2 = new Array(1,2,3,4)

console.log(miArray);
console.log(miArray2);

miArray = ["hola",2,true,"que tal"]
miArray2 = new Array("hola",2,true,"que tal")

console.log(miArray);
console.log(miArray2);

miArray2 = new Array(3)
miArray2[2] = "Pepito"
miArray2[4] = true

console.log(miArray2)

// Metodos comunes
console.log("---------------- METODOS COMUNES ----------------");

miArray = []

// push y pop

miArray.push("Pepito")
miArray.push("Fulanito")
miArray.push(7)
miArray.push(true)

console.log(miArray.pop()) // Elimina el ultimo y lo devuelve

console.log(miArray);

// shift y unshift
console.log(miArray.shift()); // Elimina el primero y lo devuelve

console.log(miArray);

miArray.unshift("Menganito","Citrano")
console.log(miArray);

// length
console.log(miArray.length);


// clear
miArray = []
miArray.length = 0
console.log(miArray);

// slice
miArray = ["hola",2,true,"que tal"]
let nuevoArray = miArray.slice(1,3)
console.log(nuevoArray);

// splice
miArray.splice(1,3)
console.log(miArray);

miArray = ["hola",2,true,"que tal"]
miArray.splice(1,3,"Nueva entrada")
console.log(miArray);
