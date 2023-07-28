// destructurando objetos

const persona = {
  nombre: "junior",
  edad: 30,
  ciudad: "lima",
};

// sin destructurar

// const nombre1 = persona.nombre;
// const ciudad1= persona.ciudad;

// console.log(ciudad)

// destructurando
// const {nombre ,ciudad} = persona;
//  console.log(nombre)
//  console.log(ciudad)

//la destructuracion tamb sirve para asiganr valores por defecto si es que no existe el dato

const personita = {
  nombre: "pepito",
  edad: 40,
};

const { nombre, edad, ciudad = "arequipa" } = personita;

console.log(ciudad, nombre, edad);
console.log(personita);

//  la destructuracion tambien sirve para trabajar funciones

function probando({ nombre, edad }) {
  console.log(`nombre : ${nombre},`);
}

const persona2 = {
  nombre: "guille",
  edad: 35,
};

probando(persona2);

// quiero csmbiar los valores de un objeto

// const personita2 ={
//     nombre1 : "zac",
//     apellido1: "stark"
// }

// //destructarando para intercambiar datos 
// ({nombre1:personita2.apellido1, apellido1:personita2.nombre1}= personita2);

// console.log(personita2)