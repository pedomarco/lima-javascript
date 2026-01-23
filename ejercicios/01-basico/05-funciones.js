// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
    return a + b
}
console.log(suma(2,3));


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function mayorNumero(listaNumeros) {
    let mayor = listaNumeros[0]
    for (let numero of listaNumeros) {
        if (numero > mayor) {
            mayor = numero
        }
    }
    return mayor
}
let numeros = [1,2,3,4,5,8,10,2,5,8,21]

console.log(mayorNumero(numeros));

// Con forEach
let mayor = numeros[0]

numeros.forEach( (numero) => mayor = numero > mayor ? numero : mayor )
console.log(mayor);

// Con reduce (avanzado, no comerse la olla)
let mayorReduce = numeros.reduce((max, numero) => numero > max ? numero : max)
console.log(mayorReduce);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(texto) {
    let contador = 0
    const vocales = "aeiouAEIOU"

    for (let letra of texto) {
        if (vocales.includes(letra)) {
            contador ++
        }
    }
    return contador
}

console.log(contarVocales("hola que pasaA"));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirMayusculas(listaPalabras) {
    let resultado = []
    for (let palabra of listaPalabras) {
        resultado.push(palabra.toUpperCase())
    }
    return resultado
}
console.log(convertirMayusculas(["hola","que tal"]));

function convertirMayusculas2(listaPalabras) {
    let resultado = []
    listaPalabras.forEach((palabra) => resultado.push(palabra.toUpperCase()))
    return resultado
}
console.log(convertirMayusculas2(["hola","que tal"]));

// map
console.log(["hola","que tal"].map((palabra) => palabra.toUpperCase()));
// ["hola","que tal"] --> ["HOLA","QUE TAL"]

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(numero) {
    if (numero <= 1) return false
    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }    
    return true
}
console.log(esPrimo(7));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
// forEach
function elementosComunes(array1, array2) {
    let comunes = []
    array1.forEach( (elemento) => {
        if(array2.includes(elemento)) {
            comunes.push(elemento)
        }
    })
    return comunes
}

// for of
function elementosComunes2(array1, array2) {
    let comunes = []
    for(let elemento of array1) {
        if(array2.includes(elemento)) {
            comunes.push(elemento)
        }
    }
    return comunes
}

// filter
function elementosComunes3(array1, array2) {
    /* let arrayFiltrado = array1.filter( (elemento) => array2.includes(elemento))
    return arrayFiltrado */
    return array1.filter( (elemento) => array2.includes(elemento))
}


console.log(elementosComunes([1,2,3, "pepito"], [1,4, "pepito", 3]));
console.log(elementosComunes2([1,2,3, "pepito"], [1,4, "pepito", 3]));
console.log(elementosComunes3([1,2,3, "pepito"], [1,4, "pepito", 3]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// for of
function sumaPares(listaNumeros) {
    let suma = 0
    for (let numero of listaNumeros) {
        if (numero % 2 === 0) {
            suma += numero
        }
    }
    return suma
}

console.log(sumaPares([1,2,4,5,6,7,8,9]));

// forEach
function sumaPares2(listaNumeros) {
    let suma = 0
    listaNumeros.forEach( numero => {
        if (numero % 2 === 0) {
            suma += numero
        }
    })
    return suma
}

console.log(sumaPares2([1,2,4,5,6,7,8,9]));

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// forEach
function elevarCuadrado(listaNumeros) {
    let resultado = []
    listaNumeros.forEach( numero => resultado.push(numero ** 2) )
    return resultado
}

console.log(elevarCuadrado([1,2,3,4,5,6]));

// map
function elevarCuadrado2(listaNumeros) {
    return listaNumeros.map( numero => numero ** 2 )    
}

console.log(elevarCuadrado2([1,2,3,4,5,6]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// for
function invertirPalabras(texto) {
    let listaPalabras = texto.split(" ")
    let resultado = ""

    for (let i = listaPalabras.length - 1; i >= 0; i--) {
        resultado += listaPalabras[i] + " "
    }

    return resultado.trim()
}

console.log(invertirPalabras("hola que tal"));

// for of
function invertirPalabras2(texto) {
    let listaPalabras = texto.split(" ")
    let resultado = []

    for (let palabra of listaPalabras) {
        resultado.unshift(palabra)
    }

    return resultado.join(" ")
}

console.log(invertirPalabras2("hola que tal"));

// for of
function invertirPalabras3(texto) {
    return texto
        .split(" ")
        .reverse()
        .join(" ")
}

console.log(invertirPalabras3("hola que tal"));

/* console.log("hola que tal".split(" "));
console.log(["hola", "que", "tal"].join(" "));
 */

// 10. Crea una función que calcule el factorial de un número dado (5! = 5 * 4 * 3 * 2, 3! = 3 * 2, ... )
function factorial(numero) {
    let resultado = 1    

    for (let i = 1; i <= numero; i++) {
        resultado *= i
    }

    return resultado
}

console.log(factorial(5)); //120
