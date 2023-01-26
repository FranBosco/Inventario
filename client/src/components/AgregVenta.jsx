import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos, addVenta } from '../redux/actions';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
import SearchBarProds from './SearchBarProds';

import Menu from './Menu';

export default function AgregVenta() {
	const prods = useSelector((state) => state.allProductos);

	const dispatch = useDispatch();

	const [venta, setVenta] = useState([]);

	const [property, setProperty] = useState('name');
	const [order, setOrder] = useState('ASC');

	function handleRefresh() {
		setProperty('name');
		setOrder('ASC');
		dispatch(getProductos(property, order));
	}

	const handleOrderNameASC = (e) => {
		e.preventDefault();
		setProperty('name');
		setOrder('ASC');
	};
	const handleOrderNameDESC = (e) => {
		e.preventDefault();
		setProperty('name');
		setOrder('DESC');
	};

	const handleOrderStockASC = (e) => {
		e.preventDefault();
		setProperty('stock');
		setOrder('ASC');
	};
	const handleOrderStockDESC = (e) => {
		e.preventDefault();
		setProperty('stock');
		setOrder('DESC');
	};

	const handleOrderDifferenceASC = (e) => {
		e.preventDefault();
		setProperty('difference');
		setOrder('ASC');
	};

	const handleOrderDifferenceDESC = (e) => {
		e.preventDefault();
		setProperty('difference');
		setOrder('DESC');
	};

	const handleChange = (e) => {
		setVenta((prevState) => {
			const newState = [...prevState];
			newState[e.target.name] = { id: e.target.name, stock: e.target.value };
			return newState;
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addVenta(venta));
		alert('stock modificado');
		dispatch(getProductos(property, order));
		window.location.reload();
	};

	useEffect(() => {
		dispatch(getProductos(property, order));
	}, [dispatch, property, order]);
	return (
		<div className="flex flex-col justify-center">
			<Link
				to="/home"
				className="flex justify-start pt-2 pl-2 pb-2 sm:pt-8 sm:pl-8"
			>
				<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-blue-800 rounded-lg hover:bg-blue-800 sm:py-2 sm:px-8 sm:text-xl">
					Volver
				</button>
			</Link>
			<div className="sm:flex sm:justify-start sm:align-start">
				<Menu />
			</div>

			<h1 className="flex justify-center text-black text-2xl sm:text-3xl underline font-bold pb-4	 ">
				Agregar Ventas
			</h1>
			<p className="flex justify-center ml-4 mr-4 sm:pb-4">
				Agregar productos vendidos para restar del stock los mismos
			</p>
			<div className="sm:flex sm:flex-col sm:justify-center pl-2 pt-2 pb-2 sm:pl-20 ">
				<SearchBarProds className="" />
				<button
					onClick={handleRefresh}
					className=" border-2 border-blue-800 mt-2 rounded-xl hover:bg-blue-800 hover:text-white sm:w-48 	"
				>
					Volver a cargar
				</button>
			</div>
			<table className="table-fixed mr-2 ml-2 sm:mr-20 sm:ml-20 ">
				<thead>
					<tr className="text-black border-2 border-black sm:text-xl">
						<th className="px-2 py-2 border-4 border-black sm:px-12  ">
							Productos
							<div className="flex space-x-4 justify-center ">
								<button onClick={(e) => handleOrderNameDESC(e)}>
									<FaArrowDown />
								</button>
								<button onClick={(e) => handleOrderNameASC(e)}>
									<FaArrowUp />
								</button>
							</div>
						</th>
						<th className="px-2 border-4 border-black sm:px-12">
							Stock{' '}
							<div className="flex space-x-4 justify-center ">
								<button onClick={(e) => handleOrderStockDESC(e)}>
									<FaArrowDown />
								</button>
								<button onClick={(e) => handleOrderStockASC(e)}>
									<FaArrowUp />
								</button>
							</div>
						</th>
						<th className="px-2 border-4 border-black sm:px-12">Deseado</th>
						<th className="px-2 border-4 border-black sm:px-12">
							Diferencia{' '}
							<div className="flex space-x-4 justify-center ">
								<button
									value="DESC"
									onClick={(e) => handleOrderDifferenceDESC(e)}
								>
									<FaArrowDown />
								</button>
								<button
									value="ASC"
									onClick={(e) => handleOrderDifferenceASC(e)}
								>
									<FaArrowUp />
								</button>
							</div>
						</th>
						<th className="px-2 border-4 border-black sm:px-12">
							Unidades vendidas
						</th>
					</tr>
				</thead>
				<tbody>
					{prods?.map((p) => {
						return (
							<tr className="text-black border-2 border-black " key={p.id}>
								<td className="px-2 border-2 border-black">
									{p.name} - {p.id}
								</td>
								<td className="px-2 border-2 border-black">{p.stock}</td>
								<td className="px-2 border-2 border-black">{p.min}</td>
								{p.difference > 0 ? (
									<td className="px-2 border-2 border-black">{p.difference}</td>
								) : (
									<td className="px-2 border-2 border-black bg-red-500">
										{p.difference}
									</td>
								)}

								<td className="px-2 border-2 border-black">
									<input
										type="number"
										className="font-bold"
										onChange={(e) => handleChange(e)}
										name={p.id}
										placeholder="seleccione cantidad"
									/>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="flex justify-center pt-4">
				<button
					onClick={handleSubmit}
					className="text-black font-mono border-2 rounded-xl border-blue-800 py-2 px-4 hover:bg-blue-800 hover:text-white"
				>
					Guardar
				</button>
			</div>
		</div>
	);
}
