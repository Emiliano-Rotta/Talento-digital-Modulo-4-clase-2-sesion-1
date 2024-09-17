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
