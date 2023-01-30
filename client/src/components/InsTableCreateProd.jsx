import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInsumos } from '../redux/actions';
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

export default function AllProdsTable() {
	const insumos = useSelector((state) => state.allInsumos);
	const dispatch = useDispatch();

	const [property, setProperty] = useState('name');
	const [order, setOrder] = useState('ASC');

	const handleOrderNameASC = (e) => {
		e.preventDefault();
		setProperty('name');
		setOrder('ASC');
	};
	const handleOrderNameDESC = (e) => {
		e.preventDefault();
		setProperty('name');
		setOrder('DESC');
	};

	useEffect(() => {
		dispatch(getInsumos(property, order));
	}, [dispatch, property, order]);
	return (
		<div className="flex flex-col justify-center">
			<table className="table-fixed mr-2 ml-2 sm:mr-20 sm:ml-20 ">
				<thead>
					<tr className="text-black border-2 border-black sm:text-xl">
						<th className="px-2 py-2 border-4 border-black sm:px-12  ">
							Insumos
							<div className="flex space-x-4 justify-center ">
								<button onClick={(e) => handleOrderNameDESC(e)}>
									<FaArrowDown />
								</button>
								<button onClick={(e) => handleOrderNameASC(e)}>
									<FaArrowUp />
								</button>
							</div>
						</th>
						<th className="px-2 border-4 border-black sm:px-12">
							Agregar cantidad
						</th>
					</tr>
				</thead>
				<tbody>
					{insumos?.map((i) => {
						return (
							<tr className="text-black border-2 border-black " key={i.id}>
								<td className="px-2 border-2 border-black">{i.name}</td>
								<td className="px-2 border-2 border-black">
									<input type="number" className="flex justify-center" />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
