import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowDown } from 'react-icons/fi';

export default function Landing() {
	return (
		<div className="containerLanding">
			<h1 className="flex text-blue-800 font-mono underline underline-offset-2 justify-center pt-48 text-xl sm:text-4xl sm:font-bold sm:pb-10 md:pt-32  md:text-5xl ">
				- Gestor de inventarios -
			</h1>
			<div className="flex justify-center animate-bounce pt-20 sm:pt-10  ">
				<FiArrowDown className="w-20 h-32 flex justify-center " />
			</div>
			<Link
				to="/home"
				className="flex text-black font-mono justify-center pt-20 "
			>
				<button className="flex text-black font-mono justify-center animate-pulse border-2 border-black rounded-lg py-2 px-2 hover:text-black hover:bg-blue-800 sm:border-4 sm:py-6 sm:px-12 sm:text-2xl sm:font-bold  ">
					Ingresa
				</button>
			</Link>
		</div>
	);
}
