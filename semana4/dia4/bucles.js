// que cosa es un bucle en js
// iterador = i  indcie de mi bucle 
//i++    i = 1+1
// indica que se hara de uno en uno

//bucle FOR 

for (let i = 5 ; i <= 10 ; i++){

console.log ("iterando ",i)}


const alumnos =["pepe","juana","fabio","alfonso"]

for(let i =0; i < alumnos.length ; i++){
    console.log(alumnos[i])
}


const numeros =[1,2,3,4,5,6,7,8,9,10]
//como haria para recorrer  y solo imprimir los numeros pares ??
  for(let i = 0; i < numeros.length ;i++){
    if(numeros[i] % 2 === 0){
        console.log(numeros[i])
    }
  }

  // comom recorremos un objeto 


  const laptops=[
    {
    marca: "lenovo",
    Imagen:"https://logo",
    nombre:"ti name",
    vendedor:"falabeella",
    precioOferta: 1599,
    precioNormal : 3599,
    calificacion: 2
  },
  {
    marca: "mac",
    Imagen:"https://logo",
    nombre:"ti name",
    vendedor:"oschle",
    precioOferta: 2599,
    precioNormal : 3599,
    calificacion: 3
  },
  ] 

  for(o=0 ; o < laptops.length; o++){
    console.log(laptops[o].marca)
  }

  // recordemos que lenght devuelke la cantindad de elementos de un array
  // recordemos que un array inicia con el indice 0



  // forEach   es un bucle 
  
  const numeroz =[1,2,3,4,5,6,7,8,9,10];

  numeroz.forEach((numero,index)=>{
    return numero *2
  });

  console.log(numeroz)


  const productos =[
    {
        name:"celular",
        price:1500
    },
    {
        name:"laptops",
        price: 2500
    },
    {
        name:"pc",
        price:3500
    }
  ]

