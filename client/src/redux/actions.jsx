import axios from 'axios';
export const GET_ALL_INSUMOS = 'GET_ALL_INSUMOS';
export const GET_INSUMOS_BY_NAME = 'GET_INSUMOS_BY_NAME';
export const GET_ALL_PRODUCTOS = 'GET_ALL_PRODUCTOS';
export const GET_PRODUCTOS_BY_NAME = 'GET_PRODUCTOS_BY_NAME';
export const GET_PRODS_HOME = 'GET_PRODS_HOME';
export const GET_PRODS_BY_ID = 'GET_PRODS_BY_ID';
export const GET_INSUMOS_HOME = 'GET_INSUMOS_HOME';
export const GET_INSUMO_BY_ID = 'GET_INSUMO_BY_ID';
export const CREATE_PROD = 'CREATE_PROD';
export const CREATE_INS = 'CREATE_INS';
export const MODIF_INS = 'MODIF_INS';
export const MODIF_PROD = 'MODIF_PROD';
export const ADD_STOCK_INSUMOS = 'ADD_STOCK_INSUMOS';
export const ADD_VENTA = 'ADD_VENTA';
export const ADD_STOCK_PRODUCTOS = 'ADD_STOCK_PRODUCTOS';
export const ADD_PRODUCCION = 'ADD_PRODUCCION';

//Traer todos los insumos
export function getInsumos(property, order) {
	try {
		return async function (dispatch) {
			var info = await axios.get(
				`http://localhost:3001/insumos?property=${property}&order=${order}`
			);
			return dispatch({
				type: GET_ALL_INSUMOS,
				payload: info.data
			});
		};
	} catch (error) {
		console.log(error);
	}
}

// Buscar por nombre los insumos
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

//Traer los insumos que se van a ver en la homepage
export function getInsumosHome() {
	try {
		return async function (dispatch) {
			var info = await axios.get('http://localhost:3001/insumosHome');
			return dispatch({
				type: GET_INSUMOS_HOME,
				payload: info.data
			});
		};
	} catch (error) {}
}

// Traer un insumo en particular
export function getInsumoId(id) {
	try {
		return async function (dispatch) {
			var info = await axios.get(`http://localhost:3001/insumos/${id}`);
			return dispatch({
				type: GET_INSUMO_BY_ID,
				payload: info.data
			});
		};
	} catch (error) {}
}

//Crear un insumo
export function createInsumo(payload) {
	return async function (dispatch) {
		try {
			const info = await axios.post('http://localhost:3001/insumos', payload);
			return dispatch({
				type: CREATE_INS,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Editar un insumo
export const modifyInsumo = (
	id,
	name,
	img,
	details,
	stock,
	unidadDeMedida,
	min
) => {
	return async function (dispatch) {
		try {
			const info = await axios.put(`http://localhost:3001/insumos/${id}`, {
				name,
				img,
				details,
				stock,
				min,
				unidadDeMedida
			});

			return dispatch({
				type: MODIF_INS,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

//Agregar stock a un insumo
export function addStockInsumo(payload) {
	try {
		return async function (dispatch) {
			var info = await axios.put(`http://localhost:3001/insumos/add/`, payload);
			console.log(payload, 'payloadaddins');
			return dispatch({
				type: ADD_STOCK_INSUMOS,
				payload: info.data
			});
		};
	} catch (error) {}
}

/* export function addStockProducto(payload) {
	try {
		return async function (dispatch) {
			var info = await axios.put(
				`http://localhost:3001/productos/add/`, payload);
			return dispatch({
				type: ADD_STOCK_PRODUCTOS,
				payload: info.data
			});
		};
	} catch (error) {}
}  */

//Traer todos los inmsumos
export function getProductos(property, order) {
	try {
		return async function (dispatch) {
			var info = await axios.get(
				`http://localhost:3001/productos
				?property=${property}&order=${order}`
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

//Busqueda de productos por nombre
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

//Traer los productos para la tabla del home
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

//Traer un producto en particular
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

//Crear un producto
export function createProd(payload) {
	return async function (dispatch) {
		try {
			const info = await axios.post('http://localhost:3001/productos', payload);
			return dispatch({
				type: CREATE_PROD,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
}

//Editar un producto
export const modifyProd = (
	id,
	name,
	img,
	details,
	stock,
	min,
	defaultInput,
	difference
) => {
	return async function (dispatch) {
		try {
			const info = await axios.put(`http://localhost:3001/productos/${id}`, {
				name,
				img,
				details,
				stock,
				min,
				defaultInput,
				difference
			});
			return dispatch({
				type: MODIF_PROD,
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

//Agregar venta (resta del stock la cantidad vendida)

export function addVenta(payload) {
	try {
		return async function (dispatch) {
			var info = await axios.put(`http://localhost:3001/ventas`, payload);

			return dispatch({
				type: ADD_VENTA,
				payload: info.data
			});
		};
	} catch (error) {}
}

//Modifica stock de productos
export function addStockProducto(payload) {
	try {
		return async function (dispatch) {
			var info = await axios.put(
				`http://localhost:3001/productos/add/`,
				payload
			);
			return dispatch({
				type: ADD_STOCK_PRODUCTOS,
				payload: info.data
			});
		};
	} catch (error) {}
}

export function addProduccion(payload) {
	try {
		return async function (dispatch) {
			var info = await axios.put(`http://localhost:3001/produccion`, payload);
			return dispatch({
				type: ADD_PRODUCCION,
				payload: info.data
			});
		};
	} catch (error) {}
}
