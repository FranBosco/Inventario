import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInsumoId } from '../redux/actions';
import { modifyInsumo } from '../redux/actions';
import { useParams, Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Menu from './Menu';

export default function ModifyIns() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const ins = useSelector((state) => state.insumoById);
	const history = useHistory();

	const [input, setInput] = useState({
		name: '',
		img: '',
		details: '',
		stock: 0,
		unidadDeMedida: '',
		min: 0
	});

	useEffect(() => {
		dispatch(getInsumoId(id));
		setInput({
			id: ins.id,
			name: ins.name,
			img: ins.img,
			details: ins.details,
			stock: ins.stock,
			unidadDeMedida: ins.unidadDeMedida,
			min: ins.min
		});
	}, []);

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('insumo modificado correctamente');
		dispatch(
			modifyInsumo(
				id,
				input.name,
				input.img,
				input.details,
				input.stock,
				input.unidadDeMedida,
				input.min
			)
		);
		history.push('/home');
	};

	//---------------------------------------------------------------------------------------------------------
	return (
		<div className="pt-4">
			<Link to="/home" className="flex justify-start pt-2 pl-2">
				<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-blue-800 rounded-lg hover:bg-blue-800 sm:py-2 sm:px-8 sm:text-xl">
					Volver
				</button>
			</Link>
			<div className="sm:flex sm:justify-start sm:align-start">
				<Menu />
			</div>
			<div className="flex flex-row space-x-2 justify-center ">
				<h1 className="text-xl">Modificar insumo: </h1>
				<h1 className="text-xl font-bold">{ins.name}</h1>
			</div>
			<div className="flex flex-col justify-center pt-8">
				<div className="flex flex-row pb-4 justify-center  ">
					<h3 className="pr-2">Nombre:</h3>
					<input
						className="border-2 border-blue-800 w-3/4 rounded-xl  "
						type="text"
						placeholder={ins.name}
						value={input.name}
						name="name"
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-row pb-4 justify-center  ">
					<h3 className="pr-2">Imagen:</h3>
					<input
						className="border-2 border-blue-800 w-3/4 rounded-xl  "
						type="text"
						placeholder={ins.img}
						value={input.img}
						name="img"
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-row pb-4 justify-center  ">
					<h3 className="pr-2">Detalles:</h3>
					<input
						className="border-2 border-blue-800 w-3/4 rounded-xl  "
						type="text"
						placeholder={ins.details}
						value={input.details}
						name="details"
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-row pb-4 justify-center  ">
					<h3 className="pr-2">Medida:</h3>
					<input
						className="border-2 border-blue-800 w-3/4 rounded-xl  "
						type="text"
						placeholder={ins.unidadDeMedida}
						value={input.unidadDeMedida}
						name="unidadDeMedida"
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-row pb-4 justify-center   ">
					<h3 className="pr-2">Stock act:</h3>
					<input
						className="border-2 border-blue-800 w-3/4 rounded-xl  "
						type="number"
						placeholder={ins.stock}
						value={input.stock}
						name="stock"
						onChange={handleChange}
					/>
				</div>
				<div className="flex flex-row pb-4 justify-center ">
					<h3 className="pr-2">Minimo:</h3>
					<input
						className="border-2 border-blue-800 w-3/4 rounded-xl  "
						type="number"
						placeholder={ins.min}
						value={input.min}
						name="min"
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="flex justify-center">
				<button
					className=" border-2 border-blue-800 py-2 px-4 rounded-xl hover:bg-blue-800 hover:text-white font-bold "
					type="submit"
					onClick={handleSubmit}
				>
					Guardar cambios
				</button>
			</div>
		</div>
	);
}
