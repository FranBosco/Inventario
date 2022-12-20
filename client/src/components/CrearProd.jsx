import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default function CrearProd() {
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
			<h1 className=" flex justify-center text-black text-xl font-mono font-bold pt-10 pb-10 sm:text-4xl underline">
				Agregar un nuevo producto
			</h1>
			<div className="flex justify-center">
				<form className="flex flex-col">
					<div className="flex flex-col sm:text-xl sm:font-bold ">
						<label className="">Nombre del producto: </label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="text"
							name=""
							id=""
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold ">
						<label>Stock inicial:</label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="number"
							name=""
							id=""
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold ">
						<label>Detalles del producto:</label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="text"
							name=""
							id=""
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold ">
						<label>Unidad de medida (cm,lt,kg, etc.):</label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="text"
							name=""
							id=""
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold">
						<label>Stock minimo deseado:</label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="number"
							name=""
							id=""
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold">
						<label>Imagen del producto:</label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="text"
							name=""
							id=""
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold">
						<label>Insumos utilizados:</label>
						<select className="border-2 border-blue-800 rounded-xl">
							<option value="">Aca va el listado de insumos</option>
						</select>
					</div>
					<div className="pt-8 flex justify-center">
						<button className=" border-2 border-blue-800 py-2 px-4 rounded-xl hover:bg-blue-800 hover:text-white font-bold">
							Guardar cambios
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
