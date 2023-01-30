import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createInsumo } from '../redux/actions';
import { Link } from 'react-router-dom';
import Menu from './Menu';

export default function CrearInsumo() {
	const dispatch = useDispatch();
	const [input, setInput] = useState({
		name: '',
		img: '',
		details: '',
		stock: 0,
		unidadDeMedida: '',
		min: 0
	});

	const [image, setImage] = useState('');
	const [link, setLink] = useState('');
	const [loading, setLoading] = React.useState(1);
	const [errors, setErrors] = React.useState({});

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value.toLowerCase()
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createInsumo(input));
		alert('Insumo creado satisfactoriamente');
		setInput({
			name: '',
			img: '',
			details: '',
			stock: 0,
			unidadDeMedida: '',
			min: 0
		});
		window.location.reload();
	};

	//-------------------------------------------------------------------------------------------
	//Cloudinary

	const handleimg = async (e) => {
		const files = e.target.files;
		const data = new FormData();
		let size = 0; //toma valor numerico del archivo.
		if (files) {
			size += files[0].size;
		}

		data.append('file', files[0]);
		data.append('upload_preset', 'gestorDeInventario');

		try {
			const res = await fetch(
				'https://api.cloudinary.com/v1_1/dwblsrtdb/image/upload',
				{
					method: 'POST',
					body: data
				}
			);
			const file = await res.json();
			let array = file.secure_url.split('.');
			let format = array[array.length - 1];

			if (size > 2000000) {
				setErrors({
					...errors,
					img: 'El archivo es demasiado grande'
				});
			} else {
				if (format === 'jpg' || format === 'png') {
					setErrors({
						...errors,
						img: ''
					});
					setImage(file.secure_url);
					setLoading(0);
					setInput({
						...input,
						img: file.secure_url
					});
				} else {
					setErrors({
						...errors,
						img: 'Solo se admiten archivos formato jpeg o png'
					});
					setLoading(1);
				}
			}
		} catch (error) {
			setErrors({
				...errors,
				img: 'Solo se admiten archivos formato jpeg o png'
			});
			setLoading(1);
		}
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
				Agregar un nuevo insumo
			</h1>
			<p className="flex justify-center ml-4 mr-4 pb-4 sm:pb-8">
				Agregar un insumo nuevo que se utilce para la fabricación de productos
			</p>
			<div className="flex justify-center">
				<form className="flex flex-col">
					<div className="flex flex-col sm:text-xl sm:font-bold ">
						<label className="">Nombre del insumo: </label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="text"
							name="name"
							value={input.value}
							id=""
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
						<label>Detalles del insumo:</label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="text"
							name="details"
							id=""
							value={input.details}
							onChange={handleChange}
						/>
					</div>
					<div className="flex flex-col sm:text-xl sm:font-bold ">
						<label>Unidad de medida (cm,lt,kg, etc.):</label>
						<input
							className="border-2 border-blue-800 rounded-xl"
							type="text"
							name="unidadDeMedida"
							id=""
							value={input.unidadDeMedida}
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
						<label>Imagen del Insumo:</label>

						<input
							className="border-2 border-blue-800 rounded-xl"
							id="inputFile"
							type="file"
							name="image"
							onChange={(e) => handleimg(e)}
						/>

						{loading === 0 ? (
							<div>
								<br />
								<img
									src={image}
									alt=""
									className="border-2 border-blue-800 rounded-xl w-32 h-32 sm:w-64 sm:h-56"
								/>
								<br />
							</div>
						) : (
							false
						)}
						{errors.img ? errors.img : false}
						<br />
					</div>
					<div className="pt-4 pb-8 flex justify-center">
						{input.name ? (
							<button
								className=" border-2 border-blue-800 py-2 px-4 rounded-xl hover:bg-blue-800 hover:text-white font-bold"
								type="submit"
								onClick={handleSubmit}
							>
								Guardar cambios
							</button>
						) : (
							<p className="text-red-400">Debe ingresar el nombre del insumo</p>
						)}
					</div>
				</form>
			</div>
		</div>
	);
}
