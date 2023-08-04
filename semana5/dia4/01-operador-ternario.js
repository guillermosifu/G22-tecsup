const precio = 8100;

if (precio < 500) {
	console.log('El producto está en oferta');
} else {
	console.log('El producto no está en oferta');
}

// convirtiendo la condicional de arriba en
// un operador ternario

console.log(
	precio < 500 ? 'El producto está en oferta' : 'El producto no está en oferta'
);
