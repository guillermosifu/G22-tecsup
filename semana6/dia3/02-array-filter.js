// busacr todos los productos, cuyo stock sea
// menor a 50 unidades

// HINT usar filter, con el mismo comportamiento de la
// funcion find

const respuesta = productos.filter((p) => p.stock < 50);
console.log(respuesta);
