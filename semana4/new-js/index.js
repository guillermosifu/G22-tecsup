//esto las maneras de declarar variable

//var : errores , utlizar muy global
//const:
//let :cambien data

const numero1 = 10; //en una variables solose puede almacenar un dato  cualquier dato/.
const numero2 = 200;

let resultado = 0;

resultado = numero1 + numero2;

console.log("el resultado es :", resultado);
// console.error("el error es:",resultado)
// console.warn("el error es:",resultado)

// alert("hola mundo ")  es una alerta del navegador
//console.log  imprime en consola del navegador

//TIPOS DE DATOS 

//NUMERICOS = number

let edad = 50;
let oferta = 150.99;

//Textos = string 

 let nombre = "guillermo";
  let frase = "este es un dia donde aprendo JS "

  // booleanos = true or false

  let esVerdad = true;
  let esMentira = false;

  //nulos = indefinidos 
  let nulo = null;
  let valoIndefinido;

  // arrays o arreglos 
   
  let alumnos = ["pepito","tony","andre",50,true, 101.2]
// realizemos ejermplos

// const valor1=prompt("ingresa un valor ");
// const valor2 = prompt("ingreso el segundo valor ")

//neceistamos que el usuario ingrese tambien el tipo de operacion que quier hacer
//puede ser + - * /

// const operacion =prompt("ingresa una operaion puede ser + - * /");
let resultadoCalculadora = 0;

//para poe hacer un calculro matematico  debo conveetir el valor texto  a number
//string a number
//parseInt : convirte el dato string a number




// if(operacion === "+") {
// resultadoCalculadora = +valor1 + +valor2;
// console.log("suma es",resultadoCalculadora)
// }if(operacion ==="-"){
//     resultadoCalculadora = +valor1 - +valor2;
//     console.log("resta es igual",resultadoCalculadora)
// }if(operacion === "*"){
//     resultadoCalculadora= +valor1 * +valor2;
//     console.log("multiplicar", resultadoCalculadora)
// }