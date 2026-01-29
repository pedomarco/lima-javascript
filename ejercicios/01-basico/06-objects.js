// 1. Crea un objeto con 3 propiedades
let objeto1 = {
    nombre: "Pepito",
    edad: 25,
    ciudad: "Vigo"
}

// 2. Accede y muestra su valor
console.log(objeto1.nombre);
console.log(objeto1.edad);
console.log(objeto1["ciudad"]);


// 3. Agrega una nueva propiedad
console.log(objeto1.profesion);
objeto1.profesion = "Progamador"
console.log(objeto1);

// 4. Elimina una de las 3 primeras propiedades
delete objeto1.edad
console.log(objeto1);

// 5. Agrega una función e invócala
objeto1.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} y vivo en ${this.ciudad}`);
}

objeto1.saludar2 = function () {
    return`Hola, me llamo ${this.nombre} y vivo en ${this.ciudad}`
}

objeto1.saludar()
console.log(objeto1.saludar2());


// 6. Itera las propiedades del objeto
for (let propiedad in objeto1) {
    console.log(propiedad + ": " + objeto1[propiedad]);
}

// 7. Crea un objeto anidado
let objeto2 = {
    id: 1,
    datos: {
        nombre: "Fulanito",
        ciudad: "Vigo"
    }
}
console.log(objeto2);


// 8. Accede y muestra el valor de las propiedades anidadas
console.log(objeto2.datos.nombre);
console.log(objeto2.datos.ciudad);
console.log(objeto2.id);


// 9. Comprueba si los dos objetos creados son iguales
let objeto3 = {
    id: 1,
    datos: {
        nombre: "Fulanito",
        ciudad: "Vigo"
    }
}

console.log(objeto2 == objeto3);
console.log(objeto2 === objeto3);


// 10. Comprueba si dos propiedades de objetos diferentes son iguales
console.log(objeto1.ciudad == objeto2.datos.ciudad);
console.log(objeto1.ciudad === objeto2.datos.ciudad);

