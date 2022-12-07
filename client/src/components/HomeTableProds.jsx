import React from 'react';
import '../styles/HomeTable.css';
import { Link } from 'react-router-dom';
import { RiEdit2Line } from 'react-icons/ri';

export default function HomeTableProds() {
	return (
		<table className="">
			<thead>
				<tr className="text-black border-2 border-black">
					<th className="px-2 border-2 border-black">Producto</th>
					<th className="px-2 border-2 border-black">Stock </th>
					<th className="px-2 border-2 border-black">Min</th>
					<th className="px-2 border-2 border-black">Editar</th>
				</tr>
			</thead>
			<tbody>
				<tr className="text-black border-2 border-black ">
					<td className="px-2 border-2 border-black">Prod 1</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">
						Prod 2 con test para ver como reacciona el css de tailwind cuando
						escribo un producto con el nombre largo
					</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">Prod 3</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">Prod 4</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">Prod 5</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">Prod 6</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">xxx</td>
					<td className="px-2 border-2 border-black">
						<Link to="/" className="flex justify-center">
							<RiEdit2Line />
						</Link>
					</td>
				</tr>
				<tr className="text-black border-2 border-black">
					<td className="px-2 border-2 border-black">Prod 7</td>
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
