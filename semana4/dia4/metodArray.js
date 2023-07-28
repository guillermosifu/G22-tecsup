// metodos arrays
// push = agregaun elemento al final del array

const numeros = [1,2,3,4,5,6,7]

numeros.push(8);
console.log(numeros)

//pop = elimina el ultimo elemento del array
const numeros1 = [1,2,3,4,5,6,7]
numeros1.pop()
console.log(numeros1)

//shift= elimina el primer elemento del array

const alumnos =["pepito",'goku',"vegeta","mayimbu"]

alumnos.shift()
console.log(alumnos)

//unshift= agrega un elemento al inicio del array 

const laptops =["mac","lenovo","dell","advance"]

laptops.unshift("msi")

console.log(laptops)

// splice = permite ingresa , eliminar o reemplaza en cualquier posicion del array 

// const numbers = [1,2,3,4,5];
// const subArray= numbers.slice(1, 4)
// console.log(subArray)
// console.log(numbers)

//alumnos.splice(2,1,"SUPERMAN");
// console.log(alumnos);

// alumnos.splice(2,1);
// console.log(alumnos);

// alumnos.splice(3,1,"BATMAN");
// console.log(alumnos);
// reemplaza, elimina, agrega



// slice=saca una porcion del array sin modificar el array original 
const numbers = [1,2,3,4,5];
const subArray= numbers.slice(1, 4)
console.log(subArray)
console.log(numbers)


//filter = crear un nuevo elemento que cunmpla una condicion  , espceficar de un funcion 

const numbers2 =[1,2,3,4,5]
const nuevoArray = numbers2.filter((elemento)=> elemento >1)
console.log(nuevoArray)

//map = crea un nuevo array con los resultados de aplicar una funcion en cada elemento /itera el arrays

const miArray = [1,2,3,4,]
const newArray = miArray.map((elemento) =>elemento *3);
console.log(newArray)

//reduce= reduce todos los elemento a un unico valor aplica una funcion que acumula .

const miArray2 = [1,2,3,4,10]
const resultado = miArray2.reduce((acumulado,elemento)=> acumulado + elemento ,0)
console.log(resultado)


