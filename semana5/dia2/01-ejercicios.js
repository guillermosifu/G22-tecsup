console.log('Cantidad de pelis: ' + peliculas.length);

/**
 * Crear una función que imprima la pelicula con
 * mayor cantidad de votos
 */

function peliculaConMasVotos() {
	let mayor = 0;
	let nombrePeli = '';

	for (let i = 0; i < peliculas.length; i++) {
		if (peliculas[i].vote_count > mayor) {
			mayor = peliculas[i].vote_count;
			nombrePeli = peliculas[i].title;
		}
	}

	console.log(
		`La pelicula con mayor cantidad de votos es: ${nombrePeli} con ${mayor} votos`
	);
}

peliculaConMasVotos();

/**
 * Cantidad de peliculas en idioma inglés
 */

function cantidadDePeliculasSegunIdioma(objetoIdioma) {
	let contador = 0;
	const { idioma, nombreIdioma } = objetoIdioma;

	for (let i = 0; i < peliculas.length; i++) {
		if (peliculas[i].original_language === idioma) {
			contador = contador + 1;
		}
	}
	console.log(`La cantidad de películas en ${nombreIdioma} es ${contador}`);
}

cantidadDePeliculasSegunIdioma({ idioma: 'en', nombreIdioma: 'Inglés' });

/**
 * ¿Cuál es el precio promedio entre todos los productos?
 * TAREA RESOLVER
 */

/**
 * ¿Cuán complejo puede ser un ojbeto?
 */
let producto = {
	nombre: 'Tv Samsung 57 FH5456',
	marca: 'Samsung',
	stock: [
		{
			almacen: 'Huachipa',
			cant: [
				{ zona: 'A', total: 10 },
				{ zona: 'B', total: 40 },
				{ zona: 'C', total: 2 }
			]
		},
		{
			almacen: 'Javier Prado',
			cant: [{ zona: 'A', total: 6 }]
		}
	],
	precio: 5200
};

/**
 * Crear una función que reciba(en un parámetro) el id de una película
 * y que imprima los géneros a los que pertenece dicha película
 */
