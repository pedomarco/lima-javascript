/* Objetos */

let persona = {
    nombre: "Pepito",
    edad: 37,
    alias: "pepito37"
}

// Acceso a propiedades
console.log(persona.nombre);
console.log(persona["nombre"]);

// Modificar las propiedades
persona.nombre = "Pepito Perez"
console.log(persona);

console.log(typeof persona.edad);
persona.edad = "37"
console.log(persona.edad);
console.log(typeof persona.edad);

// Eliminar propiedades
delete persona.edad
console.log(persona);

// Nueva propiedad
persona.edad = 30
persona["email"] = "pepito@email.com"
console.log(persona);

// Metodos
let persona2 = {
    nombre: "Fulanito",
    edad: 29,
    alias: "fulanito29",
    caminar: function () {
        console.log(`La persona llamada ${this.nombre} camina`);
    }
}

console.log(persona2.nombre);
persona2.caminar()

// Anidacion de objetos
let persona3 = {
    nombre: "Fulanito",
    edad: 29,
    alias: "fulanito29",
    caminar: function () {
        console.log(`La persona llamada ${this.nombre} camina`);
    },
    trabajo: {
        nombre: "Programador",
        experiencia: 15,
        trabajar: function () {
            console.log(`La persona con ${this.experiencia} de experiencia trabaja`);
        }
    }
}
console.log(persona3);
console.log(persona3.trabajo);
console.log(persona3.trabajo.nombre);
persona3.trabajo.trabajar()

// Iteracion

for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}


// Igualdad
let persona4 = {
    nombre: "Pepito",
    edad: 37,
    alias: "pepito37"
}

let persona5 = {
    nombre: "Pepito",
    edad: 37,
    alias: "pepito37"
}

console.log(persona4 == persona5);
console.log(persona4 === persona5);

console.log(persona4.nombre == persona5.nombre);
