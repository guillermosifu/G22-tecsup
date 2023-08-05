const texto = 'Agua que no has deber, déjala correr';

/**
 * string.length
 * retorna la cantidad de caracteres que tiene el string
 */

console.log('texto.length ', texto.length);

/**
 * string[n]
 * Retorna el caracter que tiene esa posición
 */

console.log(texto[5]);

/**
 * string.toUpperCase()
 * Retorna la cadena en mayúsculas
 * string.toLowerCase()
 * Retorna la cadena en minúsculas
 */

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

/**
 * string.endsWith("texto")
 * string.startsWith("texto")
 * retorna true o false si es que el string inicia/termina con el parámetro
 * que se le manda a las funciones (Ejm: "texto")
 */

const boleta = 'OC3454';
const factura = 'F002';

// evaluando si la variable boleta es una boleta genuina

if (boleta.startsWith('B')) {
	console.log(`La boleta ${boleta} sí es una boleta genuina`);
}

/**
 * string.includes("texto")
 * retorna true o false si es que el string incluye en alguna posición de la cadena
 * el "texto" buscado
 */

if (texto.includes('beber')) {
	console.log('La frase incluye el subtexto beber');
} else {
	console.log('La frase NO incluye el subtexto beber');
}

const recetas = [
	{ nombre: 'Aliviadol', compuesto: 'paracetamol + ibuprofeno' },
	{ nombre: 'Dolofal Forte', compuesto: 'Ibuprofeno + diclofenaco' },
	{ nombre: 'JapiAspirina', compuesto: 'Diclofenaco+aspirina' },
	{ nombre: 'JapiAspirina2', compuesto: 'DICLOFENACO+ibuprofeno' }
];

const queIncluyenDiclofenaco = () => {
	const rpta = recetas.filter((r) => {
		if (r.compuesto.toLowerCase().includes('diclofenaco')) {
			return r;
		}
	});
	console.log(rpta);
};
queIncluyenDiclofenaco();

/**
 * string.trim()
 * Retorna el mismo string sin los espacios en blanco de los extremos
 * Ejm: "   hola mundo  " => "hola mundo"
 * Ejm: "buenas        noches     con todos " =>"buenas        noches     con todos"
 */

const contrasenia = '  123456';
console.log(`Guardando... ${contrasenia.trim()}`);

/**
 * string.replace("texto a reemplazar","texto de reemplazo")
 * Retorna un nuevo string con el "texto de reemplazo" en lugar del "texto a reemplazar"
 */

const nombre = 'Jórge Gárnicaó ó ó ó';
console.log(nombre.replace('ó', 'o'));
console.log(nombre.replaceAll('ó', 'o'));
