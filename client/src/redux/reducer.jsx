import {
	GET_ALL_INSUMOS,
	GET_INSUMOS_BY_NAME,
	GET_ALL_PRODUCTOS,
	GET_PRODUCTOS_BY_NAME,
	GET_PRODS_HOME,
	GET_PRODS_BY_ID,
	getProdsById
} from './actions';

let initialState = {
	allInsumos: [],
	allInsumosCopy: [],
	allProductos: [],
	allProductosCopy: [],
	prodsHome: [],
	prodById: {}
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_INSUMOS:
			return {
				...state,
				allInsumos: action.payload,
				allInsumosCopy: action.payload
			};
		case GET_INSUMOS_BY_NAME:
			return {
				...state,
				allInsumos: action.payload.length ? action.payload : 'not found'
			};
		case GET_ALL_PRODUCTOS:
			return {
				...state,
				allProductos: action.payload,
				allInsumosCopy: action.payload,
				getProdsById: {}
			};
		case GET_PRODUCTOS_BY_NAME:
			return {
				...state,
				allProductos: action.payload.length ? action.payload : 'not found'
			};
		case GET_PRODS_HOME:
			return {
				...state,
				prodsHome: action.payload
			};
		case GET_PRODS_BY_ID: {
			return {
				...state,
				prodById: action.payload
			};
		}

		default:
			return state;
	}
}

export default rootReducer;
