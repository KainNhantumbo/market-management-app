import { Route, Routes as Roots } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CompanySetup from '../pages/CompanySetup';

export default function Routes(): JSX.Element {
	return (
		<Roots>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/create-account' element={<Register />} />
			<Route path='/company-setup' element={<CompanySetup />} />
		</Roots>
	);
}
