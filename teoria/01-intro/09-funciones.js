/* Funciones */

// Simple
function miFuncion() {
    console.log("Hola mundo");
}

miFuncion()

// Parametros

function miFuncionParametros(nombre) {
    console.log(`Hola ${nombre}`);
}

miFuncionParametros("Pepito")

function defaultSuma(a = 0, b = 0) {
    console.log(a + b);
}

defaultSuma()
defaultSuma(1, 5)

// Retorno de valores
function mult(a, b) {
    return a * b
}
let multiplicacion = mult(5,5)
console.log(multiplicacion);

// Funciones anonimas (lambdas)
const funcionAnonima = function (nombre) {
    console.log(`Hola ${nombre}`);
}

funcionAnonima("Pepito")

// Notacoin arrow
const funcionAnonima2 = (nombre) => {
    console.log(`Hola ${nombre}`);
}
funcionAnonima2("Pepito")

const funcionAnonima3 = (nombre) => console.log(`Hola ${nombre}`)
funcionAnonima3("Pepito")


// Funciones de orden superior
function aplicarFuncion(func, parametro) {
    func(parametro)
}

aplicarFuncion((nombre) => console.log(`Ejecutado dese la funcion primera: ${nombre}`), "Meganito")
aplicarFuncion(() => console.log("Hola mundo"))

// forEach
const unArray = ["hola", true, 12, "pepito"]

unArray.forEach(
    (valor) => console.log(valor)
)

unArray.forEach(
    function(valor) {
        console.log(valor)
    }
)