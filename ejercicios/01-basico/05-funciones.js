// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a, b) {
    return a + b    
}
console.log(suma(3, 5));

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
console.log(mayorNumero([2,3,5,7,8,9,7]));

// Usando reduce (avanzado)
let listaNumeros = [2,3,5,7,8,9,7]

let numeroMayor = listaNumeros.reduce( function (max, actual) {
    // max es un parametro que viene de la anterior iteracion
    // actual es el elemento de la iteracion actual
    // Primera iteracion: max -> es el primer elemento (2) y actual -> 2
    if (actual > max) {
        max = actual
    }
    return max
})

console.log(numeroMayor);

// Equivalente:
console.log(listaNumeros.reduce( (max, actual) => actual > max ? actual : max ))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
const contarVocales = (texto) => {
    let contadorVocales = 0;
    const vocales = "aeiouAEIOU"

    for (let caracter of texto) {
        if (vocales.includes(caracter)) {
            contadorVocales ++
        }
    }
    return contadorVocales
}

console.log(contarVocales("Hola que tal amigoooooo"));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

// for of
function convertirMayusculas(listaPalabras) {
    let resultado = []
    for (let palabra of listaPalabras) {
        resultado.push(palabra.toUpperCase())
    }
    return resultado
}

console.log(convertirMayusculas(["hola", "Adios", "pepito"]));


// forEach
function convertirMayusculas2(listaPalabras) {
    let resultado = []

    listaPalabras.forEach( (palabra) => resultado.push(palabra.toUpperCase()) )

    return resultado
    
}

console.log(convertirMayusculas2(["hola", "Adios", "pepito"]));

// map (avanzado)
function convertirMayusculas3(listaPalabras) {
    
    return listaPalabras.map( (palabra) => palabra.toUpperCase() )
    
}

console.log(convertirMayusculas3(["hola", "Adios", "pepito"]));


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
console.log(esPrimo(29));


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// for of
function elementosComunes(array1, array2) {
    let comunes = []

    for (let elemento of array1) {
        if (array2.includes(elemento)) {
            comunes.push(elemento)
        }
    }

    return comunes
}

console.log(elementosComunes([1,2,3,"pepito"], [5,4,3,"pepito"]));

// forEach
function elementosComunes2(array1, array2) {
    let comunes = []

     array1.forEach( (elemento) => {
        if (array2.includes(elemento)) {
            comunes.push(elemento)
        }
     } )   

    return comunes
}

console.log(elementosComunes2([1,2,3,"pepito"], [5,4,3,"pepito"]));

// filter (avanzado)
function elementosComunes3(array1, array2) {
    let arrayFiltrado = array1.filter( (elemento) => array2.includes(elemento) ) // lo que devuelve la lambda tiene que ser un boolean
    return arrayFiltrado
    // return array1.filter( (elemento) => array2.includes(elemento) )
}

console.log(elementosComunes3([1,2,3,"pepito"], [5,4,3,"pepito"]));

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
// for of
function sumaPares(listaNumeros) {
    let suma = 0
    for (let numero of listaNumeros) {
        if ( numero % 2 === 0) {
            suma += numero
        }
    }    
    return suma
}

console.log(sumaPares([1,2,3,4,5,6,7]))


// forEach
function sumaPares2(listaNumeros) {
    let suma = 0
    listaNumeros.forEach( (numero) => {
        if (numero % 2 === 0) {
            suma += numero
        }
    })   
    return suma
}

console.log(sumaPares2([1,2,3,4,5,6,7]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
// [1,2,3,4,5,6,7] --> [1,4,9,16,25,36,49]
// for of
function elevarCuadrado(listaNumeros) {
    let resultado = []
    for (let numero of listaNumeros) {
        resultado.push(numero ** 2)
    }
    return resultado    
}

console.log(elevarCuadrado([1,2,3,4,5,6,7]));

// map
function elevarCuadrado2(listaNumeros) {
    return listaNumeros.map( (numero) => numero ** 2 ) 
}

console.log(elevarCuadrado2([1,2,3,4,5,6,7]));

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso


// 10. Crea una función que calcule el factorial de un número dado