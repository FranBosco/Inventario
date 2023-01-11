import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInsumos } from '../redux/actions';
import { createProd } from '../redux/actions';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default function CrearProd() {
	const dispatch = useDispatch();
	const allInsumos = useSelector((state) => state.allInsumos);
	const [input, setInput] = useState({
		name: '',
		img: '',
		details: '',
		stock: 0,
		min: 0,
		insumos: [],
		defaultInput: [],
		aux: {}
	});

	const [valueIns, setValueIns] = useState('');
	const [valueCant, setValueCant] = useState('');
	console.log('input', input);

	useEffect(() => {
		dispatch(getInsumos('name', 'ASC'));
	}, [dispatch]);

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value.toLowerCase()
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(createProd(input));
		alert('Producto creado satisfactoriamente');
		setInput({
			name: '',
			img: '',
			details: '',
			stock: 0,
			min: 0,
			insumos: [],
			defaultInput: [],
			aux: {}
		});
	};

	const handleSelect = (e) => {
		e.preventDefault();
		console.log(e.target.value, 'vaaaalue');
		setValueIns(e.target.value);


		setInput({
			...input,
			insumos: [...new Set([...input.insumos, e.target.value])],
			aux: { insumos: e.target.value }
		});
	};
	console.log(input.aux, 'auxiliar');

	const handleChangeCant = (e) => {
		e.preventDefault();
		setValueCant(e.target.value);
		setInput({
			...input,
			aux: { insumos: input.aux.insumos, cantidad: e.target.value }
		});
	};

	const handleSubCant = (e) => {
		e.preventDefault();
		input.defaultInput.push(input.aux);
		setInput({
			...input,
			aux: {}
		});
		setValueCant('');
		setValueIns('');
	};

	//-----------------------------------------------------------------------------------------------------------------

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
							name="name"
							id=""
							value={input.name}
							onChange={handleChange}
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold ">
						<label>Stock inicial:</label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="number"
							name="stock"
							id=""
							value={input.stock}
							onChange={handleChange}
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold ">
						<label>Detalles del producto:</label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="text"
							name="details"
							id=""
							value={input.details}
							onChange={handleChange}
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold">
						<label>Stock minimo deseado:</label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="number"
							name="min"
							id=""
							value={input.min}
							onChange={handleChange}
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold">
						<label>Imagen del producto:</label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="text"
							name="img"
							id=""
							value={input.img}
							onChange={handleChange}
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold">
						<label>Insumos utilizados:</label>
						<select
							className="border-2 border-blue-800 rounded-xl"
							onChange={handleSelect}
							value={valueIns}
						>
							<option value="">Seleccione un insumo</option>
							{allInsumos?.map((i) => (
								<option value={i.name} key={i.id}>
									{i.name}
								</option>
							))}
						</select>
						<div className="flex flex-col sm:flex-row">
							<span value={valueCant}>
								<div className="flex flex-col sm:pt-4 rounded-xl">
									<input
										onChange={(e) => handleChangeCant(e)}
										type="number"
										placeholder="seleccione cantidad"
										value={valueCant}

									/>
									<button onClick={(e) => handleSubCant(e)}>Cargar</button>
								</div>
							</span>
						</div>
						{input.defaultInput.map((e) => {
							return (
								<div>
									<h1>{e.insumos}</h1>
									<h2>{e.cantidad}</h2>
								</div>
							);
						})}
					</div>
					<div className="pt-8 flex justify-center">
						<button
							className=" border-2 border-blue-800 py-2 px-4 rounded-xl hover:bg-blue-800 hover:text-white font-bold"
							type="submit"
							onClick={handleSubmit}
						>
							Guardar cambios
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
