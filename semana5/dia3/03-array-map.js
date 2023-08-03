/**
 * La función map tiene un comportamiento similar
 * a la función filter y find.
 * En este caso, la función map retorna SIEMPRE
 * la misma cantidad de elementos que tiene el arreglo original
 * Su naturaleza es modificar un conjunto de elementos y
 * devolver un nuevo arreglo a partir de los elementos iniciales.
 */
/**
 * A todos los productos por promoción, se les descuenta 10 soles
 */
const rpta = productos.map((p) => {
	p.precio = p.precio - 10;
	return p;
});
console.log(rpta);

/**
 * Retornar un nuevo arreglo de productos, con sólo el precio y el nonmbre
 * en cada objeto
 */

/**
 * A los productos que tienen stock < 50 unidades, descontarles el 10%
 * a los que no, dejarlos con el precio original
 * Imprimir el nuevo arreglo de todos productos con sus nuevos precios según aplique
 */
