import { Route, Routes as Roots } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import CompanySetup from '../pages/CompanySetup';
import Dashboard from '../pages/admin/Dashboard';
import Categories from '../pages/admin/Categories';
import Profile from '../pages/admin/Profile';
import Company from '../pages/admin/Company';

export default function Routes(): JSX.Element {
	return (
		<Roots>
			<Route path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/create-account' element={<Register />} />
			<Route path='/company-setup' element={<CompanySetup />} />
			<Route
				path='/admin/dashboard'
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/admin/categories'
				element={
					<ProtectedRoute>
						<Categories />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/admin/profile'
				element={
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/admin/company'
				element={
					<ProtectedRoute>
						<Company />
					</ProtectedRoute>
				}
			/>
		</Roots>
	);
}
