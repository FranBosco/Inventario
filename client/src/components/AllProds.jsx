import React from 'react';
import { RiEdit2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default function Allproductos() {
	return (
		<div className="flex flex-col justify-center">
			<Link to="/home" className="flex justify-start pt-2 pl-2">
				<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-blue-800 rounded-lg hover:bg-blue-800 sm:py-2 sm:px-8 sm:text-xl">
					Volver
				</button>
			</Link>
			<div className="sm:flex sm:justify-start sm:align-start">
				<Menu />
			</div>
			<h1 className=" flex justify-center text-black text-2xl font-mono font-bold pt-10 pb-10 sm:text-4xl underline text-blue-800  ">
				Productos
			</h1>
			<table className="table-fixed mr-2 ml-2 sm:mr-20 sm:ml-20 ">
				<thead>
					<tr className="text-black border-2 border-black">
						<th className="px-2 border-2 border-black sm:px-12 ">Productos</th>
						<th className="px-2 border-2 border-black sm:px-12">Stock </th>
						<th className="px-2 border-2 border-black sm:px-12">Deseado</th>
						<th className="px-2 border-2 border-black sm:px-12">Editar</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-black border-2 border-black ">
						<td className="px-2 border-2 border-black">producto 1</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">
							<Link to="/" className="flex justify-center">
								<RiEdit2Line />
							</Link>
						</td>
					</tr>
					<tr className="text-black border-2 border-black">
						<td className="px-2 border-2 border-black">producto 2</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">
							<Link to="/" className="flex justify-center">
								<RiEdit2Line />
							</Link>
						</td>
					</tr>
					<tr className="text-black border-2 border-black">
						<td className="px-2 border-2 border-black">producto 3</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">
							<Link to="/" className="flex justify-center">
								<RiEdit2Line />
							</Link>
						</td>
					</tr>
					<tr className="text-black border-2 border-black">
						<td className="px-2 border-2 border-black">producto 4</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">
							<Link to="/" className="flex justify-center">
								<RiEdit2Line />
							</Link>
						</td>
					</tr>
					<tr className="text-black border-2 border-black">
						<td className="px-2 border-2 border-black">producto 5</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">
							<Link to="/" className="flex justify-center">
								<RiEdit2Line />
							</Link>
						</td>
					</tr>
					<tr className="text-black border-2 border-black">
						<td className="px-2 border-2 border-black">producto 6</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">xxx</td>
						<td className="px-2 border-2 border-black">
							<Link to="/" className="flex justify-center">
								<RiEdit2Line />
							</Link>
						</td>
					</tr>
					<tr className="text-black border-2 border-black">
						<td className="px-2 border-2 border-black">producto 7</td>
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
		</div>
	);
}
