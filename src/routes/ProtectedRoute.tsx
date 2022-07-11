import { useNavigate } from 'react-router-dom';
import * as React from 'react';

interface Props {
	children: React.ReactNode;
}

// used to restrict acess to admin routes
const ProtectedRoute = (props: any) => {
	const navigate = useNavigate();
	const access_token = JSON.parse(localStorage.getItem('accessToken') || '');
	if (!access_token || access_token === undefined) {
		navigate('/login');
		return;
	}
	return props.children;
};

export default ProtectedRoute;
