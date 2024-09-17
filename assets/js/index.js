// // Repaso primera clase


// //Ejercicios de Destructuring con Objetos y Arrays
// // 8. Ejercicio: Destructuring básico de objetos
// // Consigna: Usa destructuring para extraer las propiedades nombre y edad de un objeto persona y mostrarlas en consola.

// const persona = {nombre: "Sebastian", edad: 30}

// let { nombre, edad } = persona
// console.log(nombre)
// console.log(edad)


// //---------------------------------


// //9. Ejercicio: Destructuring con alias en objetos
// // Consigna: Usa destructuring para extraer la propiedad modelo de un objeto auto y renombrarla como carModel.

// const auto = { marca:"Renault", modelo:"Clio" }

// var { modelo: carModel } = auto

// console.log(carModel)

// //---------------------------------


// //10. Ejercicio: Destructuring de arrays
// // Consigna: Usa destructuring para extraer los dos ultimos elementos de este array: const frutas = ["Manzana", "Banana", "Naranja"];


// const frutas = ["Manzana", "Banana", "Naranja"];

// const [, segunda, tercera] = frutas

// console.log(segunda)
// console.log(tercera)



//-------------------------------------------------------
/////// Clase 2 sesion 1 Mod 4

// // 7. Destructuring anidado con objetos
// const empleado = {
//     nombre: "Carlos",
//     trabajo: {
//         puesto: "Desarrollador",
//         departamento: "IT"
//     }
// };

// var { nombre, trabajo: { puesto, departamento }} = empleado

// var { puesto: puestoDos } = empleado.trabajo //esto se puede

// console.log(nombre)
// console.log(puesto)
// console.log(puestoDos)

//-------------------------------------
//8. Destructuring anidado con arrays  Explicación: Este ejemplo muestra cómo extraer valores de un array anidado. La sintaxis es similar a la de los objetos anidados.

// const numeros = [1, [2, 3], 4];

// var [ primero, [segundo, tercero], cuarto ] = numeros
// console.log(segundo)
// console.log(tercero)

//-------------------------------
//9 Destructuring en parámetros de funciones (objetos)  


// const mostrarDatos = (params) => {
//     console.log(params.nombre, params.edad)
//     console.log(params)
// }

// const mostrarDatos = ({ nombre, edad}) => {
//     console.log(nombre, edad)
// }

// const persona = { nombre: "Ana", edad: 25, apellido: "Perez"};
// mostrarDatos(persona); 

//--------------------------------
//10 Destructuring en parámetros de funciones (arrays)

// const mostrarColores = ([ primero, segundo ]) =>{
//     console.log(`Colores: ${primero} ${segundo}`)
// }


// const colores = ["Rojo", "Verde", "Azul"];
// mostrarColores(colores); 

//------------------------------------------
//11 Destructuring con operador rest en arrays

// const letras = ["a", "b", "c", "d", "e"];

// const[ primera, segunda, ...restoArray ] = letras;

// console.log(primera)
// console.log(segunda)
// console.log(restoArray)

// //---------------------------------
// //12 Destructuring con operador rest en objetos 

// const auto = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     año: 2022,
//     color: "Negro"
// };

// const { marca, modelo, ...restoObjeto } = auto

// console.log(marca)
// console.log(modelo)
// console.log(restoObjeto)

//------------------------------------------------------
//                Funciones flecha 
//------------------------------------------------------
// las funciones flecha son una forma más concisa de escribir funciones en JavaScript. Fueron introducidas en ES6 (ECMAScript 2015) y tienen varias diferencias con las funciones tradicionales.

// Ventajas de las funciones flecha:
// -- Sintaxis más corta: Las funciones flecha permiten reducir el código, especialmente cuando el cuerpo de la función es sencillo.
// -- No vinculan su propio this: A diferencia de las funciones tradicionales, las funciones flecha no crean su propio contexto de this, lo que puede ser beneficioso en ciertos casos, como al trabajar con objetos o clases.
// -- Sin necesidad de return explícito: Si el cuerpo de la función tiene una sola línea, el valor se devuelve automáticamente sin necesidad de escribir return.



// Diferencias clave:
// -- this en funciones flecha: Las funciones tradicionales crean su propio this basado en cómo se llaman. Las funciones flecha no tienen su propio this, por lo que heredan el valor de this del contexto en el que fueron definidas.
// -- No tienen arguments: Las funciones flecha no tienen el objeto arguments que es común en las funciones tradicionales.
//los arguments lo vemos mas adelante, pero para adelantar:  es una característica que existe en las funciones tradicionales de JavaScript. Se trata de un objeto (similar a un array), que contiene todos los argumentos que se pasaron a la función cuando fue invocada

// function sumar(a, b) {
//     return a + b;
// }
// const sumarflecha = (a, b) => a + b


// function esPar(n) {
//     return n % 2 === 0;
// }
// const esParFlecha = n =>  n % 2 === 0;


// function saludar(nombre) {
//     return `Hola, ${nombre}!`;
// }
// const saludarFliecha = nombre => `Hola, ${nombre}`
// console.log(saludarFliecha("Emi"))

// // function convertirCelsiusAFahrenheit(celsius) {
// //     return celsius * 9/5 + 32;
// // }
// const convertirCelsiusAFahrenheitFlecha = celsius => celsius * 9/5 + 32;

// // function duplicar(n) {
// //     return n * 2;
// // }
// const duplicarFlecha = n => n * 2;




// --------------------------------------------
// Consignas de los 15 ejercicios: hasta las 20.30
//1 Dado el siguiente objeto persona, usa destructuring anidado para extraer el nombre y la ciudad de residencia de la persona.

// const persona = {
//     nombre: "Ana",
//     edad: 30,
//     direccion: {
//         ciudad: "Madrid",
//         pais: "España"
//     }
// };

//-------------------------------------
//2 A partir del siguiente array, usa destructuring anidado para obtener el segundo valor de cada sub-array.

// const numeros = [[1, 2], [3, 4], [5, 6]];

//-------------------------------------
//3 Crea una función tradicional que reciba un objeto con propiedades nombre, edad y profesion. Usa destructuring en los parámetros de la función para extraer esas propiedades y mostrar un mensaje con ellas.

//-------------------------------------
//4 Convierte la función del ejercicio anterior en una función flecha.

//-------------------------------------
//5 A partir del siguiente array de colores, usa destructuring con el operador rest para extraer el primer color en una variable, y los demás colores en un array llamado otrosColores.

// const colores = ["rojo", "azul", "verde", "amarillo"];

//-------------------------------------
//6 Dado el siguiente objeto auto, crea una función que use destructuring en los parámetros para extraer el modelo y el año. La función debe devolver una cadena que diga: "El modelo es [modelo] y el año es [año]".

// const auto = {
//     modelo: "Toyota",
//     año: 2021,
//     color: "negro"
// };
//-------------------------------------
//7 Convierte la función del ejercicio anterior en una función flecha.
//-------------------------------------
//8 Dado el siguiente array frutas, usa destructuring anidado para extraer la primera fruta del primer sub-array y la segunda fruta del tercer sub-array.

// const frutas = [["manzana", "pera"], ["naranja", "limón"], ["cereza", "fresa"]];

//-------------------------------------
//9 Crea una función tradicional que reciba un array de números y use destructuring en los parámetros para extraer el primer número y el resto de los números. La función debe devolver un array con el primer número duplicado y el resto sin cambios.

//-------------------------------------
//10 Convierte la función del ejercicio anterior en una función flecha.

//-------------------------------------
//11 A partir del siguiente objeto libro, usa destructuring anidado para extraer el nombre del autor y el nombre del segundo capítulo.

// const libro = {
//     titulo: "JavaScript Avanzado",
//     autor: {
//         nombre: "Carlos Ruiz",
//         edad: 45
//     },
//     capitulos: ["Introducción", "Funciones", "Objetos"]
// };
//-------------------------------------
//12 Dado el siguiente array de arrays, usa destructuring anidado y operador rest para extraer el primer valor de cada sub-array y el resto de los valores en un nuevo array llamado otrosNumeros.

// const numeros = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];

//-------------------------------------
//13 Crea una función tradicional que reciba un objeto mascota con las propiedades nombre, tipo y edad. Usa destructuring en los parámetros para extraer las propiedades y devolver un mensaje con ellas.

//-------------------------------------
//14 Convierte la función del ejercicio anterior en una función flecha.

//-------------------------------------
//15 Dado el siguiente array alumnos, crea una función que use destructuring en los parámetros para extraer el primer y segundo alumno, y devuelva un mensaje que diga: "Los primeros dos alumnos son [alumno1] y [alumno2]".

// const alumnos = ["Lucas", "Sofía", "Martín", "Paula"];
//-------------------------------------
