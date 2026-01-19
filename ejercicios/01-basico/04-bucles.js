// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <=20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0

for (let i = 1; i <=100; i++) { 
    suma += i    
}

console.log(suma); // (1+100)100/2 (a_0 + a_n)n/2

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let i = 1
while (i <= 50) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++
}
// Mas eficiente
i = 2
while (i <= 50) {
    console.log(i);
    i+=2
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["pepito", "fulanito" , "menganito"]
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

for (let valor of nombres) {
    console.log(valor);    
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const texto = "Estoy aprendiendo JavaScript hola"
let contadorVocales = 0;
const vocales = "aeiouAEIOU"

for (let caracter of texto) {
    if (vocales.includes(caracter)) {
        contadorVocales ++
    }
}

console.log(contadorVocales);


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto (while)
const numeros = [2, 3, 4, 5, 8, 10, 12]
let producto = 1
i = 0

while (i < numeros.length) {
    //producto = producto * numeros[i]
    producto *= numeros[i]
    i++
}
console.log(producto);


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x 5 = ${i*5}`);
}

// 8. Usa un bucle para invertir una cadena de texto "012"
const cadena = "Dar la vuelta a este texto"
let invertida = ""

for (let i = cadena.length -1; i >= 0; i--) {
    invertida += cadena[i]
}

console.log(invertida);

let arrayInvertido = []
for (let caracter of cadena) {
    arrayInvertido.unshift(caracter)
}
console.log(arrayInvertido.join(""));

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
// 0 1 1 2 3 5 8 13 ...
console.log("Sucesion de Fibonacci");
let a = 0
let b = 1
console.log(a);
console.log(b);
for (let i = 3; i <= 10; i++) {
    let siguiente = a + b
    console.log(siguiente);
    /* 
    a = b
    b = siguiente   
    */
    [a, b] = [b, siguiente]
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const listaNumeros = [4, 2, 3, 10, 12, 20, 1000, 4, 6, 7, 21, 11]
let mayoresDeDiez = []

for (let numero of listaNumeros) {
    if (numero > 10) {
        mayoresDeDiez.push(numero)
    }
}

console.log(mayoresDeDiez);

