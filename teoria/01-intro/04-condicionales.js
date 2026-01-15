/* CONDICIONALES */

let edad = 16

// if else
if (edad == 20) {
    console.log("La edad es 20");
} else {
    console.log("La edad NO es 20");
    
}

// if else if else
if (edad == 20) {
    console.log("La edad es 20");
} else if (edad < 18) {
    console.log("Es menor de edad");
} else {
    console.log("La edad no es 20 ni es menor de edad");
}

// ternario
edad = 20
const mensaje = edad == 20 ? "La edad es 20" : "La edad NO es 20"
console.log(mensaje);

// switch
let dia = 7
let nombreDia

switch(dia) {
    case 0:
        nombreDia = "Lunes"
        break
    case 1:
        nombreDia = "Martes"
        break
    case 2:
        nombreDia = "Miercoles"
        break
    case 3:
        nombreDia = "Jueves"
        break
    case 4:
        nombreDia = "Viernes"
        break
    default:
        nombreDia = "Es fin de semana"
}

console.log(nombreDia);
