import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import AllProdsTable from './AllProdsTable';

export default function Allproductos() {
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

			<div className="sm:flex sm:justify-start sm:align-start pt-2 pl-2 pb-2 sm:pt-8 sm:pl-8">
				<Menu />
			</div>
			<h1 className=" flex justify-center text-black text-2xl font-mono font-bold pt-10 pb-8 sm:text-4xl underline text-blue-800  ">
				Productos
			</h1>
			<p className="flex justify-center ml-4 mr-4 pb-4">
				Listado de todos los productos
			</p>
			<AllProdsTable />
		</div>
	);
}
