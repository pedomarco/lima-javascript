/*
2. Imprime por consola un mensaje si el usuario y contraseña coinciden
   con unos establecidos
*/

const usuario = "admin"
const pass = 1234

if (usuario === "admin" && pass === 1234) {
    console.log("Acceso permitido");
    
} else {
    console.log("Acceso denegado");
}

/*
3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
*/
const numero = -5
if (numero > 0) {
    console.log("El numero es positivo");
} else if (numero < 0) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}
/*
4. Verifica si una persona puede votar o no (>= 18)
   e indica cuántos años le faltan
*/
const edad = 18
if (edad >= 18) {
    console.log("Puede votar");
} else {
    console.log(`NO puede votar. Le faltan ${18 - edad} años`);
}
/*
5. Usa el operador ternario para asignar "adulto" o "menor"
   dependiendo de la edad
*/
let categoria = edad < 18 ? "menor" : "mayor"
console.log(categoria);

/*
6. Muestra en qué estación del año estamos según la variable mes (usando switch)
*/
let mes = "marzo"

switch(mes) {
    case "marzo":
    case "abril":
    case "mayo":
        console.log("Primavera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log("Verano");
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("Otoño");
        break;
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("Invierno");
        break;
    default:
        console.log("Mes no valido");
        
    
    
        
}