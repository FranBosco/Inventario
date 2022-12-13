import React from 'react';

import { Link } from 'react-router-dom';
import { RiEdit2Line } from 'react-icons/ri';

export default function HomeTableInsumos() {
	return (
		<table className="table-fixed ">
			<thead>
				<tr className="text-black border-2 border-black">
					<th className="px-2 border-2 border-black sm:px-12 ">Insumos</th>
					<th className="px-2 border-2 border-black sm:px-12">Stock </th>
					<th className="px-2 border-2 border-black sm:px-12">Deseado</th>
					<th className="px-2 border-2 border-black sm:px-12">Editar</th>
				</tr>
			</thead>
			<tbody>
				<tr className="text-black border-2 border-black ">
					<td className="px-2 border-2 border-black">Insumo 1</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">Insumo 2</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">Insumo 3</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">Insumo 4</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">Insumo 5</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">Insumo 6</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">Insumo 7</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
