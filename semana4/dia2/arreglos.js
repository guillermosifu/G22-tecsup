// como declamor variables
//es muy similar variable /alamacena data - variada 
//  []
// un arreglo es un conjunto o coleccion de datos
const nombre = "guillermo ";


console.log(nombre);

//siempre al contar la data de una lista inicia desde cero 
const nombres =["guille","pepito","lucas",true,30,10.2];

console.log(nombres);

//una coleccion de laptops - como puedo obtener algun elemtno de la coleccion?

const laptops = ["mac","lenovo","msi","toshiba","advance","asus","hp"]

console.log("estos son las laptops",laptops)
console.log("este es el elemento ",laptops[2])


//\como podria cambiar un dato de una coleccion ?
//reasigenmos el valor de un elemento

laptops[3]="Dell";
console.log(laptops)

// se podra crea un elemento adicional??  como lo ghariamos?
//forma1
laptops[10]="pepito";
//forma2
laptops.push("fulanito");

// como eliminaria data  o un elemento? de un array?
 //forma metodo pop
//elimina el ultimo elemento
 laptops.pop();

 // elimina el primero elemento 
 laptops.shift()

 // mas flexible es SPLICE / este te permite elimniar un elemento segun su posicion 
 
 laptops.splice(2,4);