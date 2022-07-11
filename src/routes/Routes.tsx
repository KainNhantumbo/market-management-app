import React from 'react';
import { Route, Routes as Roots } from 'react-router-dom';
import Home from '../pages/Home';

export default function Routes() {
	return (
		<Roots>
			<Route path='/' element={<Home />} />
		</Roots>
	);
}
