import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ImMenu } from 'react-icons/im';
import { SlQuestion } from 'react-icons/sl';

export default function NavBar() {
	// hidde o visible del menu lateral
	const [menuClicked, setMenuClicked] = useState('unclicked');
	const [menuState, setMenuState] = useState('hidden');
	const [isClicked, setIsClicked] = useState(false);

	const updateState = () => {
		if (!isClicked) {
			setMenuClicked('clicked');
			setMenuState('visible');
		} else {
			setMenuClicked('unclicked');
			setMenuState('hidden');
		}
		setIsClicked(!isClicked);
	};
	//hidde o visible del texto de los componentes
	//Agregar Produccion

	const [textClickedAp, setTextClickedAp] = useState('unclicked');
	const [textStateAp, setTextStateAp] = useState('hidden');
	const [textIsClickedAp, setTextIsClickedAp] = useState(false);

	const updateStateTextAp = () => {
		if (!textIsClickedAp) {
			setTextClickedAp('clicked');
			setTextStateAp('visible');
		} else {
			setTextClickedAp('unclicked');
			setTextStateAp('hidden');
		}
		setTextIsClickedAp(!textIsClickedAp);
	};

	//Agregar Ventas
	const [textClickedAv, setTextClickedAv] = useState('unclicked');
	const [textStateAv, setTextStateAv] = useState('hidden');
	const [textIsClickedAv, setTextIsClickedAv] = useState(false);

	const updateStateTextAv = () => {
		if (!textIsClickedAv) {
			setTextClickedAv('clicked');
			setTextStateAv('visible');
		} else {
			setTextClickedAv('unclicked');
			setTextStateAv('hidden');
		}
		setTextIsClickedAv(!textIsClickedAv);
	};

	// Modif Stock

	const [textClickedMs, setTextClickedMs] = useState('unclicked');
	const [textStateMs, setTextStateMs] = useState('hidden');
	const [textIsClickedMs, setTextIsClickedMs] = useState(false);

	const updateStateTextMs = () => {
		if (!textIsClickedMs) {
			setTextClickedMs('clicked');
			setTextStateMs('visible');
		} else {
			setTextClickedMs('unclicked');
			setTextStateMs('hidden');
		}
		setTextIsClickedMs(!textIsClickedMs);
	};

	//Agregar insumo

	const [textClickedAi, setTextClickedAi] = useState('unclicked');
	const [textStateAi, setTextStateAi] = useState('hidden');
	const [textIsClickedAi, setTextIsClickedAi] = useState(false);

	const updateStateTextAi = () => {
		if (!textIsClickedAi) {
			setTextClickedAi('clicked');
			setTextStateAi('visible');
		} else {
			setTextClickedAi('unclicked');
			setTextStateAi('hidden');
		}
		setTextIsClickedAi(!textIsClickedAi);
	};

	//Agregar Producto

	const [textClickedAgp, setTextClickedAgp] = useState('unclicked');
	const [textStateAgp, setTextStateAgp] = useState('hidden');
	const [textIsClickedAgp, setTextIsClickedAgp] = useState(false);

	const updateStateTextAgp = () => {
		if (!textIsClickedAgp) {
			setTextClickedAgp('clicked');
			setTextStateAgp('visible');
		} else {
			setTextClickedAgp('unclicked');
			setTextStateAgp('hidden');
		}
		setTextIsClickedAgp(!textIsClickedAgp);
	};

	//Ver listado insumos
	const [textClickedVi, setTextClickedVi] = useState('unclicked');
	const [textStateVi, setTextStateVi] = useState('hidden');
	const [textIsClickedVi, setTextIsClickedVi] = useState(false);

	const updateStateTextVi = () => {
		if (!textIsClickedVi) {
			setTextClickedVi('clicked');
			setTextStateVi('visible');
		} else {
			setTextClickedVi('unclicked');
			setTextStateVi('hidden');
		}
		setTextIsClickedVi(!textIsClickedVi);
	};

	//Ver listado productos
	const [textClickedVp, setTextClickedVp] = useState('unclicked');
	const [textStateVp, setTextStateVp] = useState('hidden');
	const [textIsClickedVp, setTextIsClickedVp] = useState(false);

	const updateStateTextVp = () => {
		if (!textIsClickedVp) {
			setTextClickedVp('clicked');
			setTextStateVp('visible');
		} else {
			setTextClickedVp('unclicked');
			setTextStateVp('hidden');
		}
		setTextIsClickedVp(!textIsClickedVp);
	};

	return (
		<div className="flex ">
			<div>
				<div className=" flex flex-col mr-4  text-black mt-4  sm:mt-0 sm:font-bold font-mono  ">
					<h2 className=" ml-2 sm:ml-10 sm:text-xl hover:text-blue-800 mr-4">
						Menu
					</h2>
					<ImMenu
						className="text-3xl ml-2 sm:text-4xl sm:ml-10 cursor-pointer  hover:text-blue-800"
						onClick={updateState}
					/>
				</div>
				<div className="bg-slate-200  ml-4 text-blue-800 rounded-lg w-48 sm:fixed font-bold  ">
					<nav className={menuState}>
						<div
							className="pt-4 ml-2 flex flex-col
						"
						>
							<div className="flex">
								<Link to="/aprod">Agregar Produccion</Link>
								<div>
									<SlQuestion
										className="mt-1 ml-2 hover:cursor-pointer"
										onClick={updateStateTextAp}
									/>
								</div>
							</div>
						</div>
						<div className={textStateAp}>
							<p className="ml-2 text-black font-thin">
								Agregar productos fabricados para sumar al stock de productos
								terminados las unidades fabricadas y restar del stock los
								insumos requeridos para la fabricación
							</p>
						</div>

						<div className="pt-4 ml-2 flex flex-col">
							<div className="flex">
								<Link to="/aventa">Agregar Ventas</Link>
								<SlQuestion
									className="mt-1 ml-2 hover:cursor-pointer"
									onClick={updateStateTextAv}
								/>
							</div>
							<div className={textStateAv}>
								<p className="ml-2 text-black font-thin">
									Agregar productos vendidos para restar del stock de productos
									terminados
								</p>
							</div>
						</div>
						<div className="pt-4 ml-2 flex flex-col">
							<div className="flex">
								<Link to="/modif">Modificar Stocks</Link>
								<div>
									<SlQuestion
										className="mt-1 ml-2 hover:cursor-pointer"
										onClick={updateStateTextMs}
									/>
								</div>
							</div>
							<div className={textStateMs}>
								<p className="ml-2 text-black font-thin">
									Modifique manualmente los stocks de productos e insumos
								</p>
							</div>
						</div>
						<div className="pt-4 ml-2 flex flex-col">
							<div className="flex">
								<Link to="/cins">Agregar Insumo</Link>
								<div>
									<SlQuestion
										className="mt-1 ml-2 hover:cursor-pointer"
										onClick={updateStateTextAi}
									/>
								</div>
							</div>
							<div className={textStateAi}>
								<p className="ml-2 text-black font-thin">
									Agregar un insumo nuevo que se utilce para la fabricación de
									productos
								</p>
							</div>
						</div>
						<div className="pt-4 ml-2 flex flex-col">
							<div className="flex">
								<Link to="/cprod">Agregar Producto</Link>

								<div>
									<SlQuestion
										className="mt-1 ml-2 hover:cursor-pointer"
										onClick={updateStateTextAgp}
									/>
								</div>
							</div>
							<div className={textStateAgp}>
								<p className="ml-2 text-black font-thin">
									Agregar un nuevo producto detallando las características del
									mismo
								</p>
							</div>
						</div>

						<div className="pt-4 ml-2 flex flex-col">
							<div className="flex">
								<Link to="/insumos">Lista de Insumos</Link>

								<div>
									<SlQuestion
										className="mt-1 ml-2 hover:cursor-pointer"
										onClick={updateStateTextVi}
									/>
								</div>
							</div>
							<div className={textStateVi}>
								<p className="ml-2 text-black font-thin">
									Listado de todos los insumos
								</p>
							</div>
						</div>

						<div className="pt-4 ml-2 flex flex-col pb-4">
							<div className="flex">
								<Link to="/productos">Lista de productos</Link>

								<div>
									<SlQuestion
										className="mt-1 ml-2 hover:cursor-pointer"
										onClick={updateStateTextVp}
									/>
								</div>
							</div>
							<div className={textStateVp}>
								<p className="ml-2 text-black font-thin ">
									Listado de todos los productos
								</p>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
}
