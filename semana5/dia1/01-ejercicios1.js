/**
 * Página 79 - Ejemplo 3.12 (citas - clínica)
 */
function ejercicio1() {
	let nroCita = 9;
	let pagarCita = 0;
	let tratamiento = 0;

	if (nroCita <= 3) {
		pagarCita = 200;
		tratamiento = nroCita * 200;
	} else if (nroCita <= 5) {
		pagarCita = 150;
		tratamiento = 600 + (nroCita - 3) * 150;
	} else if (nroCita <= 8) {
		pagarCita = 100;
		tratamiento = 900 + (nroCita - 5) * 100;
	} else {
		pagarCita = 50;
		tratamiento = 1200 + (nroCita - 8) * 50;
	}

	console.log(`Precio por ésta cita:  ${pagarCita}`);
	console.log(`Usted va pagando: ${tratamiento}`);
}

// ejercicio1();

/**
 * Pág. 108 Ejercicio 4.6
 */

const MESES = [
	'enero',
	'febrero',
	'marzo',
	'abril',
	'mayo',
	'junio',
	'julio',
	'agosto',
	'septiembre',
	'octubre',
	'noviembre',
	'diciembre'
];

function ejercicio2() {
	// debugger;
	let acumulado = 0;
	for (let i = 0; i < 12; i++) {
		let ingreso = +prompt(`Ingrese el monto del mes: ${MESES[i]}`);
		acumulado = acumulado + ingreso;
		console.log(`Ahorrado hasta ahora: ${acumulado}`);
	}
}

ejercicio2();
