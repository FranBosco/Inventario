import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ProdById() {
	const prod = useSelector((state) => state.prodById);

	return <div></div>;
}
