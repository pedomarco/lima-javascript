/*
1. Concatena dos cadenas de texto.
   Usa las cadenas "Hola" y "mundo" y muestra el resultado por pantalla.
   Ejemplo:
   ejercicio1() → Hola mundo
*/
const cadena1 = "Hola"
const cadena2 = "Mundo"
console.log(cadena1 + " " + cadena2);

/*
2. Muestra la longitud de una cadena de texto.
   Usa la cadena "JavaScript" y muestra cuántos caracteres tiene.
   Ejemplo:
   ejercicio2() → 10
*/
console.log("JavaScript".length);

/*
3. Muestra el primer y último carácter de un string.
   Usa la cadena "Programar" y muestra el primer y el último carácter.
   Ejemplo:
   ejercicio3() → P r
*/
const texto = "Programar"
console.log(texto[0] + " " + texto[texto.length - 1]);
console.log(texto[0] + " " + texto.at(-1));

/*
4. Convierte un string a mayúsculas y minúsculas.
   Usa la cadena "JavaScript" y muestra ambas versiones.
   Ejemplo:
   ejercicio4() →
   MAYÚSCULAS: JAVASCRIPT
   MINÚSCULAS: javascript
*/
const texto4 = "Javascript"
console.log(texto4.toLowerCase());
console.log(texto4.toUpperCase());

/*
5. Crea una cadena de texto en varias líneas.
   Muestra un texto con tres líneas diferentes.
   Ejemplo:
   ejercicio5() →
   Línea 1
   Línea 2
   Línea 3
*/
const texto5 = `Linea 1
Linea 2
Linea 3`
console.log(texto5);

/*
6. Interpola el valor de variables en un string.
   Usa el nombre "Ana" y la edad 20 y muestra la frase completa.
   Ejemplo:
   ejercicio6() → Ana tiene 20 años
*/
const nombre6 = "Ana"
const edad6 = 20
console.log(`${nombre6} tiene ${edad6} años`);

/*
7. Reemplaza los espacios en blanco por guiones.
   Usa la cadena "Aprender JavaScript es divertido".
   Ejemplo:
   ejercicio7() → Aprender-JavaScript-es-divertido
*/
const texto7 = "Aprender JavaScript es divertido"
console.log(texto7.replace(" ", "-"));
console.log(texto7.replace(/ /g, "-"));
console.log(texto7.replaceAll(" ", "-"));

/*
8. Comprueba si una cadena contiene una palabra concreta.
   Comprueba si "JavaScript" aparece en el texto.
   Ejemplo:
   ejercicio8() → true
*/
const texto8 = "Estoy aprendiendo JavaScript"
console.log(texto8.includes("JavaScript"));

/*
10. Comprueba si dos strings tienen la misma longitud.
    Usa las cadenas "sol" y "mar".
    Ejemplo:
    ejercicio10() → true
*/
let unString = "sol"
let otroString = "mara"
console.log(unString.length === otroString.length);
