// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let i = 1; i <= 100; i++) {
    suma += i
}
console.log(suma); // (a_0 + a_n)*n/2 (1+100)*100/2

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i = 1; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const nombres = ["Pepito", "Fulanito", "Menganito"]

for (let elemento of nombres) {
    console.log(elemento);
}

for (let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const texto = "Estoy aprendiendo JavaScript"
let contadorVocales = 0
const vocales = "aeiouAEIOU"

// contar vocales aqui (bucle)
for (let caracter of texto) {
    if (vocales.includes(caracter)) {
        contadorVocales ++
    }
}

console.log(contadorVocales);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numeros = [1, 2, 3, 4, 5, 6, 10, 12]
let producto = 1
let i = 0;

while (i < numeros.length) {
    producto *= numeros[i]
    i++
}

console.log(producto);


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${i*5}`);
}

// 8. Usa un bucle para invertir una cadena de texto
const cadena = "Dar la vuelta a esta cadena de texto"
let invertida = ""

for (let i = cadena.length - 1; i >= 0; i--) {
    invertida += cadena[i]
}

let arrayInvertido = []
for (let caracter of cadena){
    arrayInvertido.unshift(caracter)
}
console.log(arrayInvertido.join(""));

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
// 0 1 1 2 3 5 8 ... -> a_n = a_(n-2) + a_(n-1)
let a = 0
let b = 1

console.log("Sucesion de Fibonacci:");
console.log(a);
console.log(b);

for (let i = 3; i <=10; i++) {
    let siguiente = a + b
    console.log(siguiente);
    /* 
    a = b
    b = siguiente
     */
    [a, b] = [b, siguiente]
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const listaNumeros = [4, 2, 3, 10, 12, 20, 1, 100]
let mayoresDeDiez = []

for (let numero of listaNumeros) {
    if (numero > 10) {
        mayoresDeDiez.push(numero)
    }
}
console.log(mayoresDeDiez);
