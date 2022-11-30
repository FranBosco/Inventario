import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';
import { FiArrowDown } from 'react-icons/fi';

export default function Landing() {
	return (
		<div className="containerLanding">
			<h1 className="flex text-orange-200 font-mono underline underline-offset-2 justify-center pt-48 text-xl sm:text-3xl sm:font-bold sm:pb-10 md:pt-32  md:text-5xl ">
				- Gestor de inventarios -
			</h1>
			<div className="flex justify-center animate-bounce pt-20 sm:pt-10  ">
				<FiArrowDown className="w-20 h-32 flex justify-center " />
			</div>
			<Link
				to="/home"
				className="flex text-white font-mono justify-center pt-20 "
			>
				<button className="flex text-white font-mono justify-center animate-pulse border-2 rounded-lg py-2 px-2 hover:text-black hover:bg-white sm:border-4 sm:py-6 sm:px-12 sm:text-2xl sm:font-bold  ">
					Ingresa
				</button>
			</Link>
		</div>
	);
}
