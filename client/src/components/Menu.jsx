import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ImMenu } from 'react-icons/im';

export default function NavBar() {
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

	return (
		<div className="flex ">
			<div>
				<div className=" flex flex-col  text-black mt-8  sm:mt-0 sm:font-bold font-mono  ">
					<h2
						className=" ml-2 sm:ml-10 sm:text-xl hover:text-blue-800"
						onClick={updateState}
					>
						Menu
					</h2>
					<ImMenu
						className="text-3xl ml-2 sm:text-4xl sm:ml-10 cursor-pointer  hover:text-blue-800"
						onClick={updateState}
					/>
				</div>
				<div className="bg-slate-500 text-blue-800 rounded-lg w-48">
					<nav className={menuState}>
						<div className="pt-4">
							<Link to="/aprod">Agregar Produccion</Link>
						</div>

						<div className="pt-4">
							<Link to="/aventa">Agregar Ventas</Link>
						</div>
						<div className="pt-4">
							<Link to="/modif">Modificar Stocks</Link>
						</div>
						<div className="pt-4">
							<Link to="">Agregar/Quitar Insumo</Link>
						</div>
						<div className="pt-4">
							<Link to="">Agregar/Quitar Producto</Link>
						</div>
						<div className="pt-4">
							<Link to="">Ver listado Insumos</Link>
						</div>
						<div className="pt-4">
							<Link to="">Ver listado Productos</Link>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
}
