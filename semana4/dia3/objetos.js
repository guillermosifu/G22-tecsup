//vamoa conocer que son lo objetos 
//js  es un lenguaje orientado a objetos

// objeto carro = marca /modelo/motor/ tipo rued
//objeto persona = edad/nombre/sexo/talla/
//objet contiene / key /value  =  clave valor 

const carro = {
    color:"azul",
    motor:4.0,
    modelo:"gtr",
    marca:"nissan",
    nuevo: true

};

const persona={
    edad:35,
    nombre:"guille",
    genero: "masculino",
    moayorDeEdad:true,
    dni: 446232949,
    nacionalidad:"peruano"
}



console.log("esto es un objeto ", carro);
console.table(persona);

 // como accedemos a un element del objetc

 console.log("este esla captura",carro.marca)
 console.log("este esla captura",persona.nacionalidad)

 // como puede crear un nuevo elemento en el objetc
 
 persona.nombre="orlando"
 persona.apellido="luca"
 persona.profesion="ingeniero"
 //2da forma
 persona["celular"] =9555664444,

 console.table(persona);

 //creamos el objet celular 

 const celular={
    marca:"samsung",
    flexible: false,
    tamanio :7.0,
    gama: "alta",
    color:"negro ",
    camarar: 4,
    precio: "900$"
 }


 //quiero creen una funcion el cual retorne el nombre de la marca
 // y precio del celular 
