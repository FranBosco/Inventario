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

	const [image, setImage] = useState('');
	const [link, setLink] = useState('');
	const [loading, setLoading] = React.useState(1);
	const [errors, setErrors] = React.useState({});

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

	//-----------------------------------------------------------------
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
			<div className="flex flex-col space-x-2 justify-center sm:pb-4 ">
				<h1 className="text-xl flex justify-center">Modificar insumo: </h1>
				<h1 className="text-xl font-bold flex justify-center sm:text-3xl">
					{ins.name}
				</h1>
				<div className=" flex justify-center pt-2">
					<img
						src={ins.img}
						alt=""
						className=" w-32 h-32 sm:w-52 sm:h-48 border-2 border-blue-800 rounded-xl pt-1 "
					/>
				</div>
			</div>
			<p className="flex justify-center ml-4 mr-4 pb-4 pt-4">
				Modificar las características del insumo indicado
			</p>
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
				<div className="flex flex-row  justify-center  ">
					<h3 className="pr-2">Imagen:</h3>
					<div className="flex flex-col w-3/4">
						<input
							className="border-2 border-blue-800 rounded-xl w-100% "
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
