import axios from 'axios';
export const GET_ALL_INSUMOS = 'GET_ALL_INSUMOS';
export const GET_INSUMOS_BY_NAME = 'GET_INSUMOS_BY_NAME';
export const GET_ALL_PRODUCTOS = 'GET_ALL_PRODUCTOS';
export const GET_PRODUCTOS_BY_NAME = 'GET_PRODUCTOS_BY_NAME';
export const GET_PRODS_HOME = 'GET_PRODS_HOME';
export const GET_PRODS_BY_ID = 'GET_PRODS_BY_ID';

//RUTAS INSUMOS
/* - Traer todos los insumos (para el listado)
   - Traer los x primeros insumos para las tablas del home
   - Crear un insumo nuevo
   - Eliminar un insumo existente
   - Modificar el stock de un insumo
   - Traer insumo por Id
   - Ordenar insumo por nombre
   - Ordenar insumo por diferencia entre Stock y minmio    
    */

export function getInsumos() {
	try {
		return async function (dispatch) {
			var info = await axios.get('http://localhost:3001/insumos');
			return dispatch({
				type: GET_ALL_INSUMOS,
				payload: info.data
			});
		};
	} catch (error) {
		console.log(error);
	}
}

export function searchByNameI(name) {
	return async function (dispatch) {
		try {
			const info = await axios.get(
				`http://localhost:3001/insumos?name=${name}`
			);

			return dispatch({
				type: GET_INSUMOS_BY_NAME,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//RUTAS PRODUCTOS
/*
- Traer todos los productos (para el listado)
   - Traer los x primeros productos para las tablas del home
   - Crear un producto nuevo
   - Eliminar un preducto existente
   - Modificar el stock de un producto
   - Traer producto por Id
   - Ordenar producto por nombre
   - Ordenar producto por diferencia entre Stock y minimio 
 */

export function getProductos() {
	try {
		return async function (dispatch) {
			var info = await axios.get(
				'http://localhost:3001/productos?property=name&order=ASC'
			);
			return dispatch({
				type: GET_ALL_PRODUCTOS,
				payload: info.data
			});
		};
	} catch (error) {
		console.log(error);
	}
}

export function searchByNameP(name) {
	return async function (dispatch) {
		try {
			const info = await axios.get(
				`http://localhost:3001/productos?name=${name}`
			);

			return dispatch({
				type: GET_PRODUCTOS_BY_NAME,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getProdsHome() {
	try {
		return async function (dispatch) {
			var info = await axios.get('http://localhost:3001/productosHome');
			return dispatch({
				type: GET_PRODS_HOME,
				payload: info.data
			});
		};
	} catch (error) {}
}

export function getProdsById(id) {
	try {
		return async function (dispatch) {
			var info = await axios.get(`http://localhost:3001/productos/${id}`);
			return dispatch({
				type: GET_PRODS_BY_ID,
				payload: info.data
			});
		};
	} catch (error) {}
}
