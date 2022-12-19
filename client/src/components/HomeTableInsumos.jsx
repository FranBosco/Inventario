import React from 'react';
import { Link } from 'react-router-dom';
import { RiEdit2Line } from 'react-icons/ri';

export default function HomeTableInsumos() {
	return (
		<table className="">
			<thead>
				<tr className="text-black border-2 border-black">
					<th className="px-2 border-2 border-black ">Insumos</th>
					<th className="px-2 border-2 border-black">Stock </th>
					<th className="px-2 border-2 border-black">Min</th>
					<th className="px-2 border-2 border-black">Editar</th>
				</tr>
			</thead>
			<tbody>
				<tr className="text-black border-2 border-black ">
					<td className="px-2 border-2 border-black">
						Insumo 1 con test para ver como reacciona el css de tailwind cuando
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

/* export default function Home() {
	return (
		<div>
			<h1 className="flex justify-center text-black text-2xl sm:text-6xl sm:font-bold sm:font-mono sm:pt-10 underline">
				{' '}
				Gestor De Inventarios
			</h1>
			<div className=" sm:grid sm:grid-cols-3">
				<div className="flex justify-center align-start">
					<Menu />
				</div>
				<div>
					<div className="flex justify-center pt-10 sm:grid sm:grid-span-2 sm:pt-48   ">
						<HomeTable />
					</div>
				</div>
			</div>
		</div>
	);
} */
