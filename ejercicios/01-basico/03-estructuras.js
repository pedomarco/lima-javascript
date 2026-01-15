// 1. Crea un array que almacene cinco animales
let animales = ["perro", "gato", "conejo", "caballo", "tortuga"]
console.log(animales);

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("leon")
console.log(animales);

animales.push("pez")
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,1)
console.log(animales);

// 4. Crea un set que almacene cinco libros
let libros = new Set([
    "Quijote",
    "1984",
    "El principito",
    "La odisea",
    "El señor de los anillos"
])
console.log(libros);


// 5. Añade dos más. Uno de ellos repetido
libros.add("Cien años de soledad")
libros.add("1984")
console.log(libros);

// 6. Elimina uno concreto a tu elección
libros.delete("1984")
console.log(libros);

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"],
])
console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor (con ternaria)
let numeroMes = 13
let mensaje =  meses.has(numeroMes) ? meses.get(numeroMes) : "Mes no valido" // si existe el mes lo muestra sino "Mes no valido"
console.log(mensaje);  

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("verano", ["junio", "julio", "agosto"])
console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let numeros = [1, 1, 2, 2, 3, 4, 5, 4, 3]
console.log(numeros);

numeros = new Set(numeros)
console.log(numeros);

let unMap = new Map();
unMap.set("numeroUnicos", numeros)
console.log(unMap);
