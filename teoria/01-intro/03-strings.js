/* STRINGS */

// Concatenacion
let unNombre = "Pepito"
let saludo = "Hola, " + unNombre + "!"
console.log(saludo);

// String en varias lineas
let mensaje = `Hola
esto es
un mensaje
en varias lineas`

console.log(mensaje);


// Interpolacion
let email = "pepito@gmail.com"
console.log(`Hola ${unNombre}! Tu email es: ${email}`);


// Longitud
console.log(saludo.length);

// Acceso a caracteres
console.log(saludo[0]);
console.log(saludo[4]);

// Metodos comunes
console.log(saludo.toUpperCase());
console.log(saludo.toLowerCase());

console.log(saludo.indexOf("Hola")); // Indice donde empieza otro string
console.log(saludo.indexOf("Pepito"));
console.log(saludo.indexOf("asdf"));

console.log(saludo.includes("asdf")); // Incluye otro string
console.log(saludo.includes("Pepito"));

console.log(saludo.slice(0,4)); // Secciones
console.log(saludo.slice(6,10));

console.log(saludo.replace("Pepito","Fulanito")); // Reemplazo






