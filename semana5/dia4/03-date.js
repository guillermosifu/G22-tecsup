const hoy = new Date();
console.log(hoy);

const MESES = [
	'ene',
	'feb',
	'mar',
	'abr',
	'may',
	'jun',
	'jul',
	'ago',
	'sep',
	'oct',
	'nov',
	'dic'
];

// obtener el año
console.log('anio ', hoy.getFullYear());
// obtener el mes
// Ojo: Enero=0 y Diciembre=11
console.log('mes ', hoy.getMonth());
// obtener el día
console.log('día ', hoy.getDate());

// imprimr el mes según el arreglo MESES
console.log(MESES[hoy.getMonth()]);

const navidad2023 = new Date(2023, 11, 25);
console.log(navidad2023);

// Cuando restamos dos fechas, el resultado es la cantidad de milisegundos
// que existen entre las dos fechas.

const resta = navidad2023 - hoy;
console.log(resta / 1000 / 60 / 60 / 24);

/**
 * CLASE MATH
 */

/**
 * Math.sqrt(n)
 * Retorna la raíz cuadrada de n
 */

console.log(Math.sqrt(81));

/**
 * Math.round(n)
 * Retorna n redondeado
 */

console.log(Math.round(2.3));

/**
 * Math.random()
 * Retorna un número decimal aleatorio entre 0 y 1
 */

console.log(Math.random());

/**
 * Math.random() * (max-min)+min
 * Retorna un número random entre min y max
 */

console.log(Math.round(Math.random() * (100 - 50) + 50));

/**
 * Math.floor(n)
 * Retorna el piso de n
 * Ejm:
 * 3.1 => 3
 * 3.4 => 3
 * 3.9 => 3
 *
 * Math.ceil(n)
 * Retorna el techo de n
 * Ejm:
 * 6.00001 => 7
 * 6.3 => 7
 */

console.log(Math.floor(9.99));
console.log(Math.ceil(1.01));
