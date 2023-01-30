import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByNameI } from '../redux/actions';
import { FcSearch } from 'react-icons/fc';

export default function SearchBarInsumos() {
	const [name, setName] = useState('');
	const dispatch = useDispatch();

	function handleChange(e) {
		e.preventDefault();
		setName(e.target.value.toLowerCase());
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (name.length < 1 || name[0] === ' ' || typeof name !== 'string') {
			alert('Please, enter a valid name');
		} else {
			dispatch(searchByNameI(name));
			setName('');
		}
	}

	return (
		<div className="">
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					value={name}
					className="border-2 border-blue-800 rounded-xl sm:w-96"
					type="text"
					placeholder="   Buscar Insumo"
					onChange={(e) => handleChange(e)}
				></input>
				<button className="text-2xl " type="submit">
					<FcSearch className="" />
				</button>
			</form>
		</div>
	);
}
