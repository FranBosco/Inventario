import {
	GET_ALL_INSUMOS,
	GET_INSUMOS_BY_NAME,
	GET_ALL_PRODUCTOS,
	GET_PRODUCTOS_BY_NAME,
	GET_PRODS_HOME,
	GET_PRODS_BY_ID,
	GET_INSUMOS_HOME,
	GET_INSUMO_BY_ID,
	CREATE_PROD,
	CREATE_INS,
	MODIF_INS,
	MODIF_PROD,
	ADD_STOCK_INSUMOS,
	ADD_VENTA,
	ADD_STOCK_PRODUCTOS,
	ADD_PRODUCCION
} from './actions';

let initialState = {
	allInsumos: [],
	allInsumosCopy: [],
	allProductos: [],
	allProductosCopy: [],
	prodsHome: [],
	prodById: {},
	insumosHome: [],
	insumoById: {},
	prodById: {}
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
		case CREATE_INS:
			return {
				...state
			};
		case MODIF_INS:
			return {
				...state,
				insumoById: action.payload
			};
		case ADD_STOCK_INSUMOS:
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
		case MODIF_PROD:
			return {
				...state,
				prodById: action.payload
			};
		case ADD_VENTA:
			return {
				...state,
				prodById: action.payload
			};
		case ADD_STOCK_PRODUCTOS:
			return {
				...state,
				prodById: action.payload
			};
		case ADD_PRODUCCION:
			return {
				...state,
				prodById: action.payload
			};

		default:
			return state;
	}
}

export default rootReducer;
