/* Funciones */

// Simple
function miFuncion() {
    console.log("Esto se ejecuta desde una funcion");
}

miFuncion()

// Con parametros
function miFucionParametros(a, b) {
    console.log(a + b);
}

miFucionParametros(1, 2)

function miFucionParametrosDefault(a = 5, b = 10) {
    console.log(a + b);
}
miFucionParametrosDefault()
miFucionParametrosDefault(2,3)

// Retorno de valores
function multiplicar(a, b) {
    return a * b
}
let resultado = multiplicar(5, 6)
console.log(resultado);

// Funciones anonimas: lambdas
const funcionAnonima = function (numero) {
    console.log(`El numero es ${numero}`);
}

funcionAnonima(5)

// Funciones arrow
const miFuncion2 = (parametro) => {
    console.log(`Parametro: ${parametro}`);
}
const miFuncion3 = (parametro) => console.log(`Parametro: ${parametro}`);

miFuncion2("hola")
miFuncion3("adios")

// Funciones de orden superior
function aplicarFuncion(func, parametro) {
    func(parametro)
}

aplicarFuncion(miFuncion3, "Parametro funcion 3")
aplicarFuncion((valor) => console.log(valor), "Parametro funcion lambda")
aplicarFuncion(() => console.log("hola"))

// forEach
const unArray = [1, 2, 3, true, "pepito"]

unArray.forEach(function (value) {
    console.log(`Elemento: ${value}`);
})
console.log("Con notacion arrow");

unArray.forEach((value) => console.log(`Elemento: ${value}`))