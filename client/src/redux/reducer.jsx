import {
	GET_ALL_INSUMOS,
	GET_INSUMOS_BY_NAME,
	GET_ALL_PRODUCTOS,
	GET_PRODUCTOS_BY_NAME,
	GET_PRODS_HOME,
	GET_PRODS_BY_ID,
	GET_INSUMOS_HOME,
	GET_INSUMO_BY_ID,
	CREATE_PROD
} from './actions';

let initialState = {
	allInsumos: [],
	allInsumosCopy: [],
	allProductos: [],
	allProductosCopy: [],
	prodsHome: [],
	prodById: {},
	insumosHome: [],
	insumoById: {}
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_INSUMOS:
			return {
				...state,
				allInsumos: action.payload,
				allInsumosCopy: action.payload,
				insumoById: {}
			};
		case GET_INSUMOS_BY_NAME:
			return {
				...state,
				allInsumos: action.payload.length ? action.payload : 'not found'
			};
		case GET_INSUMOS_HOME:
			return {
				...state,
				insumosHome: action.payload
			};
		case GET_INSUMO_BY_ID:
			return {
				...state,
				insumoById: action.payload
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
		case GET_PRODS_BY_ID:
			return {
				...state,
				prodById: action.payload
			};
		case CREATE_PROD:
			return {
				...state
			};

		default:
			return state;
	}
}

export default rootReducer;
