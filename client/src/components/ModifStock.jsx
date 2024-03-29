import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import ProdsTableModif from './ProdsTableModif';
import InsTableModif from './InsTableModif';

export default function ModifStock() {
	const [BtnClicked, setBtnClicked] = useState('unclicked');
	const [NextState, setNextState] = useState('hidden');
	const [isClicked, setIsClicked] = useState(false);

	const [BtnClickedI, setBtnClickedI] = useState('unclicked');
	const [NextStateI, setNextStateI] = useState('hidden');
	const [isClickedI, setIsClickedI] = useState(false);

	const updateStateProd = () => {
		if (!isClicked) {
			setBtnClicked('clicked');
			setNextState('visible');
		} else {
			setBtnClicked('unclicked');
			setNextState('hidden');
		}
		setIsClicked(!isClicked);
	};

	const updateStateIns = () => {
		if (!isClickedI) {
			setBtnClickedI('clicked');
			setNextStateI('visible');
		} else {
			setBtnClickedI('unclicked');
			setNextStateI('hidden');
		}
		setIsClickedI(!isClickedI);
	};

	return (
		<div className="flex flex-col ">
			<Link to="/home" className="flex justify-start pt-2 pl-2">
				<button className="text-black font-mono hover:text-white pr-2 pl-2 border-2 border-blue-800 rounded-lg hover:bg-blue-800 sm:py-2 sm:px-8 sm:text-xl">
					Volver
				</button>
			</Link>
			<div className="sm:flex sm:justify-start sm:align-start">
				<Menu />
			</div>

			<h1 className=" flex justify-center text-black text-xl font-mono font-bold pt-10 pb-8 sm:text-4xl underline">
				Modificar Stock
			</h1>
			<p className="flex justify-center ml-4 mr-4 pb-4">
				Modifique manualmente los stocks de productos e insumos
			</p>

			<div className="flex justify-center text-black text-xl">
				<button
					className="border-2 border-blue-800 px-6 mr-2 hover:bg-blue-800 hover:text-white rounded-xl sm:px-20 sm:py-2"
					onClick={updateStateProd}
				>
					Productos
				</button>
				<button
					className="border-2 border-blue-800 px-6 mr-2 hover:bg-blue-800 hover:text-white rounded-xl sm:px-20 sm:py-2"
					onClick={updateStateIns}
				>
					Insumos
				</button>
			</div>
			<div className={NextState}>
				<div className="flex sm:justify-center pt-8">
					<ProdsTableModif />
				</div>
			</div>

			<div className={NextStateI}>
				<div className="flex sm:justify-center pt-8 pb-10">
					<InsTableModif />
				</div>
			</div>
		</div>
	);
}
