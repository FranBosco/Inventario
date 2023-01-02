import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default function AgregProd() {
	return (
		<div className="">
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

			<h1 className="flex justify-center text-black text-2xl sm:text-3xl underline ">
				Agregar Produccion
			</h1>
			<div className="sm:flex sm:justify-center ">
				<form>
					<div className="pt-8 pl-2">
						<label className="text-black text-xl pr-4">Producto:</label>
						<select className="">
							<option>Producto</option>
						</select>
						<h1 className="text-black">
							Aca van los productos que vamos cargando con un cuadro para numero
							de productos fabricados
						</h1>
					</div>
					<div className="flex pt-8 ">
						<button className="text-black font-mono border-2 rounded-xl border-blue-800 py-2 px-4 hover:bg-blue-800 hover:text-white">
							Guardar Cambios
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
