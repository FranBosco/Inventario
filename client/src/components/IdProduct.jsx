import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProdsById } from '../redux/actions';
import { useParams, Link } from 'react-router-dom';
import Menu from './Menu';

export default function ProdById() {
	const dispatch = useDispatch();
	const { id } = useParams();
	useEffect(() => {
		dispatch(getProdsById(id));
	}, [dispatch, id]);
	const prod = useSelector((state) => state.prodById);

	console.log('prods', prod);
	console.log('insumos', prod.insumos);

	return (
		<div className="flex flex-col  sm:pl-10 justify-center">
			<Link to="/home" className="flex justify-start pt-2 pl-2">
				<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-blue-800 rounded-lg hover:bg-blue-800 sm:py-2 sm:px-8 sm:text-xl">
					Volver
				</button>
			</Link>
			<div className="sm:flex sm:justify-start sm:align-start">
				<Menu />
			</div>
			<div>
				<h1 className="text-2xl font-bold flex justify-center pt-10 sm:pt-0 underline sm:text-5xl">
					{prod.name}
				</h1>
				<div className="flex justify-center pt-4 sm:pt-12">
					<img
						src={prod.img}
						alt=""
						className="border-2 border-blue-800 rounded-xl w-32 h-32 sm:w-56 sm:h-56"
					/>
				</div>
				<div className="">
					<p className="flex justify-start pt-2 sm:pt-10 sm:text-2xl pl-2 font-bold sm:justify-center">
						Detalle:
					</p>
					<p className="pl-2 sm:flex sm:justify-center sm:text-xl">
						{prod.details}
					</p>
				</div>
			</div>
			<div className="flex  flex-col ">
				<h1 className="flex justify-start font-bold pl-2 pt-2 sm:justify-center sm:text-2xl		">
					Insumos necesarios:
				</h1>
				{prod.defaultInput?.map((e) => {
					return (
						<h1 className="flex justify-start  pl-2  sm:justify-center sm:text-2xl">
							{e.insumos}: {e.cantidad}
						</h1>
					);
				})}

				{/* {prod.insumos?.map((i) => {
					return (
						<h1 className="flex justify-start pl-2 sm:justify-center sm:text-xl  ">
							{i.name}:
						</h1>
					);
				})} */}
			</div>
			<div className="flex justify-center  pt-4 sm:pt-12  ">
				<table>
					<thead>
						<td className="px-2 border-2 border-black w-20 sm:w-48 sm:text-2xl rounded-xl">
							Stock
						</td>
						<td className="px-2 border-2 border-black w-20 sm:w-48 sm:text-2xl rounded-xl">
							Minimo
						</td>
						<td className="px-2 border-2 border-black w-20 sm:w-48 sm:text-2xl rounded-xl">
							Diferencia
						</td>
					</thead>
					<tbody>
						<td className="px-2 border-2 border-black sm:w-48 sm:text-2xl rounded-xl">
							{prod.stock}
						</td>
						<td className="px-2 border-2 border-black sm:w-48 sm:text-2xl rounded-xl">
							{' '}
							{prod.min}
						</td>
						<td className="px-2 border-2 border-black sm:w-48 sm:text-2xl rounded-xl">
							{prod.difference}
						</td>
					</tbody>
				</table>
			</div>
			<Link to="/" className="flex justify-center pt-4 sm:pt-12 ">
				<button className="text-black font-mono border-2 rounded-xl border-blue-800 py-2 px-4 hover:bg-blue-800 hover:text-white  ">
					Modificar
				</button>
			</Link>
		</div>
	);
}
