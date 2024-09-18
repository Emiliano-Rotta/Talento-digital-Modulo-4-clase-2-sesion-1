//Primero probar tener node y npm

//colocar en la terminal node -v   y npm -v

//ponemos node (para salir, doble ctrl C o ctrl D)


//npm init -y  (es ponerle si a todo ) sino poner npm init

//poner esto en la terminal: npm install --save-dev @babel/core @babel/cli

//luego poner instalar npm install @babel/preset-env

//modificar el package.json agregar al script lo siguiente:

//"babel assets/js -d lib",

// crear una carpeta en assets/js que diga lib
// correr en la consola este codigo npm run build



//codigo de ES6
const x = "Mundo"
hola = () => `Hola ${x}`;

const sumar = (x, y) => {return x + y };  //esto es lo que cambia con babel

const num1 = 1;
const num2 = 2;
let suma = sumar(num1, num2);
console.log(`La suma entre ${num1} y ${num2} es ${suma}.`);