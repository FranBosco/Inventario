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

export function addStockInsumo(id, payload) {
	try {
		return async function (dispatch) {
			const obj = { stock: payload };
			var info = await axios.put(
				`http://localhost:3001/insumos/add/${id}`,
				obj
			);
			return dispatch({
				type: ADD_STOCK_INSUMOS,
				payload: info.data
			});
		};
	} catch (error) {}
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

/*  export const modifyInsumo = (
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
}; */
