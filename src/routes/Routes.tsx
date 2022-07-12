import { Route, Routes as Roots } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';

export default function Routes(): JSX.Element {
	return (
		<Roots>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
		</Roots>
	);
}
