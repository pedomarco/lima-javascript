/* Bucles */

// for
for (let i = 0; i < 5; i++) {
    console.log(`Iteracion ${i}`);
}

// while
let i = 0
while (i < 5) {
    console.log(`Iteracion ${i}`);
    i++
}

// do while
i = 6
do {
    console.log(`Iteracion dentro de do: ${i}`);
    i++
} while (i < 5)

// for of
let unArray = [1, 2, 3, 4, "elemento final"]

for (let valor of unArray) {
    console.log(valor);
}

let unSet = new Set([1, 2, 3, 4, "elemento final"])

for (let valor of unArray) {
    console.log(valor);
}


let unString = "Esto es un string"
for (let letra of unString) {
    console.log(letra);
    
}

// loopear en mapas
let unMap = new Map([
    [1, "valor1"],
    [2, "valor2"],
    [3, "valor3"],
])

for (let valor of unMap) {
    console.log(valor);
}

for (let [clave, valor] of unMap) {
    console.log(`Clave: ${clave} -> Valor: ${valor}`);
}

for (let clave of unMap.keys()) {
    console.log(clave);
}

for (let valor of unMap.values()) {
    console.log(valor);
}

for (let clave of unMap.keys()) {
    console.log(`${clave} -> ${unMap.get(clave)}`);
}