import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProdsById } from '../redux/actions';
import { modifyProd } from '../redux/actions';
import { getProductos } from '../redux/actions';
import { useParams, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Menu from './Menu';

export default function AgregVentas() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const history = useHistory();
	const productos = useSelector((state) => state.allProductos);
	const [property, setProperty] = useState('name');
	const [order, setOrder] = useState('ASC');
	useEffect(() => {
		dispatch(getProductos(property, order));
	}, [dispatch, property, order]);
	return (
		<div className="">
			<Link to="/home" className="flex justify-start pt-2 pl-2">
				<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-blue-800 rounded-lg hover:bg-blue-800 sm:py-2 sm:px-8 sm:text-xl">
					Volver
				</button>
			</Link>
			<div className="sm:flex sm:justify-start sm:align-start">
				<Menu />
			</div>
			<h1 className="flex justify-center text-black text-2xl sm:text-3xl underline ">
				Agregar Ventas
			</h1>
			<div className="sm:flex sm:justify-center  ">
				<form>
					<div className="pt-8 pl-2 sm:pl-10">
						<label className="text-black text-xl pr-4">Producto:</label>
						<select className="">
							<option>Producto</option>
							{productos.map((p) => {
								<option value="">{p.name}</option>;
							})}
						</select>
					</div>

					<div className="flex pt-8 sm:pl-10">
						<button className="text-black font-mono border-2 rounded-xl border-blue-800 py-2 px-4 hover:bg-blue-800 hover:text-white">
							Guardar Cambios
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
