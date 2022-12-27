import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInsumosHome } from '../redux/actions';
import { Link } from 'react-router-dom';
import { RiEdit2Line } from 'react-icons/ri';

export default function HomeTableProds() {
	const homeInsumos = useSelector((state) => state.insumosHome);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getInsumosHome());
	}, [dispatch]);

	return (
		<table className="">
			<thead>
				<tr className="text-black border-2 border-black">
					<th className="px-2 border-2 border-black">Insumo</th>
					<th className="px-2 border-2 border-black">Stock </th>
					<th className="px-2 border-2 border-black">Min</th>
					<th className="px-2 border-2 border-black">Diferencia</th>
					<th className="px-2 border-2 border-black">Editar</th>
				</tr>
			</thead>
			<tbody>
				{homeInsumos?.map((i) => {
					return (
						<tr className="text-black border-2 border-black " key={i.id}>
							<td className="px-2 border-2 border-black">{i.name}</td>
							<td className="px-2 border-2 border-black">{i.stock}</td>
							<td className="px-2 border-2 border-black">{i.min}</td>
							{i.difference > 0 ? (
								<td className="px-2 border-2 border-black">{i.difference}</td>
							) : (
								<td className="px-2 border-2 border-black bg-red-500">
									{i.difference}
								</td>
							)}

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
	);
}
