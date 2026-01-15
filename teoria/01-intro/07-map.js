/* Maps */

// Declaracion e inicializacion
let miMap = new Map()
console.log(miMap);

miMap = new Map([
    ["nombre", "pepito"],
    ["email", "pepito@gmail.com"],
    ["edad", 20]
])
console.log(miMap);

// Metodos y propiedades comunes

miMap.set("alias", "pepito29") // añadir nuevo par clave-valor
console.log(miMap);

console.log(miMap.get("nombre")); // obteher valor a partir de clave

console.log(miMap.has("alias")); // comprobar si existe una clave
console.log(miMap.has("asdf"));

miMap.delete("alias") // borrar par a partir de clave
console.log(miMap);

console.log(miMap.size); // tamaño

console.log(miMap.keys());
console.log(miMap.values());
console.log(miMap.entries());

miMap.clear()
console.log(miMap);


 