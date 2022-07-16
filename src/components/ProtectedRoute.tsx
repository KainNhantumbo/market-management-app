import { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
	children: JSX.Element;
}

// used to restrict acess to admin routes
const ProtectedRoute: FC<Props> = ({ children }) => {
	const { token } = JSON.parse(
		localStorage.getItem('accessToken') || `{"token": ""}`
	);
	console.log(token);
	if (!token) return <Navigate to={'/login'} />;
	return children;
};

export default ProtectedRoute;
