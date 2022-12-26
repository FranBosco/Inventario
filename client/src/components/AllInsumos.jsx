import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInsumos } from '../redux/actions';
import { RiEdit2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import SearchBarInsumos from './SearchBarInsumos';

export default function AllInsumos() {
	const insumos = useSelector((state) => state.allInsumos);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getInsumos());
	}, [dispatch]);

	function handleRefresh() {
		dispatch(getInsumos());
	}

	return (
		<div className="flex flex-col justify-center">
			<div className="sm:flex">
				<Link
					to="/home"
					className="flex justify-start pt-6 pl-2 sm:pt-8 sm:pl-8"
				>
					<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-blue-800 rounded-lg hover:bg-blue-800 sm:py-2 sm:px-8 sm:text-xl">
						Volver
					</button>
				</Link>
			</div>
			<div className="sm:flex sm:flex-col sm:justify-center pl-2 pt-2 sm:pl-8 ">
				<SearchBarInsumos className="" />
				<button
					onClick={handleRefresh}
					className=" border-2 border-blue-800 mt-2 rounded-xl hover:bg-blue-800 hover:text-white sm:w-48 	"
				>
					Volver a cargar
				</button>
			</div>
			<div className="sm:flex sm:justify-start sm:align-start pt-2 pl-2 pb-2 sm:pt-8 sm:pl-8">
				<Menu />
			</div>
			<h1 className=" flex justify-center text-black text-2xl font-mono font-bold pt-10 pb-10 sm:text-4xl underline text-blue-800  ">
				Insumos
			</h1>
			<table className="table-fixed mr-2 ml-2 sm:mr-20 sm:ml-20 ">
				<thead>
					<tr className="text-black border-2 border-black sm:text-xl">
						<th className="px-2 py-2 border-4 border-black sm:px-12  ">
							Insumos
						</th>
						<th className="px-2 border-4 border-black sm:px-12">Stock </th>
						<th className="px-2 border-4 border-black sm:px-12">Deseado</th>
						<th className="px-2 border-4 border-black sm:px-12">Diferencia</th>
						<th className="px-2 border-4 border-black sm:px-12">Editar</th>
					</tr>
				</thead>
				<tbody>
					{insumos?.map((i) => {
						return (
							<tr className="text-black border-2 border-black " key={i.id}>
								<td className="px-2 border-2 border-black">{i.name}</td>
								<td className="px-2 border-2 border-black">{i.stock}</td>
								<td className="px-2 border-2 border-black">{i.minimo}</td>
								<td className="px-2 border-2 border-black">
									{i.stock - i.minimo}
								</td>
								<td className="px-2 border-2 border-black">
									<Link to={`/insumo/${i.id}`} className="flex justify-center">
										<RiEdit2Line />
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
