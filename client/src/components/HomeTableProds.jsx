import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProdsHome } from '../redux/actions';
import { Link } from 'react-router-dom';
import { RiEdit2Line } from 'react-icons/ri';

export default function HomeTableProds() {
	const homeProducts = useSelector((state) => state.prodsHome);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProdsHome());
	}, [dispatch]);

	return (
		<table className="">
			<thead>
				<tr className="text-black border-2 border-black">
					<th className="px-2 border-2 border-black">Producto</th>
					<th className="px-2 border-2 border-black">Stock </th>
					<th className="px-2 border-2 border-black">Min</th>
					<th className="px-2 border-2 border-black">Diferencia</th>
					<th className="px-2 border-2 border-black">Editar</th>
				</tr>
			</thead>
			<tbody>
				{homeProducts?.map((p) => {
					return (
						<tr className="text-black border-2 border-black " key={p.id}>
							<td className="px-2 border-2 border-black">{p.name}</td>
							<td className="px-2 border-2 border-black">{p.stock}</td>
							<td className="px-2 border-2 border-black">{p.min}</td>
							{p.stock - p.min > 0 ? (
								<td className="px-2 border-2 border-black">
									{p.stock - p.min}
								</td>
							) : (
								<td className="px-2 border-2 border-black bg-red-500">
									{p.stock - p.min}
								</td>
							)}

							<td className="px-2 border-2 border-black">
								<Link to={`/producto/${p.id}`} className="flex justify-center">
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
