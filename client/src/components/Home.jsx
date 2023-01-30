import React from 'react';
import Menu from './Menu';
import HomeTableInsumos from './HomeTableInsumos';
import HomeTableProds from './HomeTableProds';

export default function Home() {
	return (
		<div>
			<h1 className="text-black text-xl font-bold pt-4 sm:flex sm:justify-center sm:text-6xl sm:font-bold  sm:pt-10 underline">
				{' '}
				Gestor de inventarios
			</h1>
			<div className=" ">
				<div className="sm:flex sm:justify-start sm:align-start">
					<Menu />
				</div>

				<div className="pr-8">
					<div className="flex flex-col pt-10 pl-2 sm:grid sm:grid-span-2 sm:pt-10 sm:pl-32 sm:pr-32  ">
						<h1 className="font-bold font-mono sm:text-xl text-blue-800 text-xl">
							Insumos
						</h1>
						<HomeTableInsumos />
					</div>
				</div>
				<div className="pr-8">
					<div className="flex flex-col pt-10 pl-2 sm:grid sm:grid-span-2 sm:pt-10 sm:pl-32 sm:pr-32  ">
						<h1 className="font-bold font-mono sm:text-xl text-blue-800 text-xl ">
							Productos
						</h1>
						<HomeTableProds />
					</div>
				</div>
			</div>
		</div>
	);
}
