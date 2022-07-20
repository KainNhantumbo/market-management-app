import React from 'react';
import {
	FiActivity,
	FiBriefcase,
	FiGrid,
	FiHome,
	FiPackage,
	FiPower,
	FiUser,
	FiUsers,
} from 'react-icons/all';
import { AsideContainer as Container } from '../styles/components/aside';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

interface NavData {
	link: string;
	pathName: string;
	icon: JSX.Element;
}

const Aside: React.FC = (): JSX.Element => {
	const navigate: NavigateFunction = useNavigate();
	const url = window.location.pathname;

	// log the user out and delete access token from storage
	const logUserOut = () => {
		localStorage.removeItem('accessToken');
		navigate('/');
	};

	const navData: NavData[] = [
		{ link: '/admin/dashboard', pathName: 'DashBoard', icon: <FiHome /> },
		{ link: '/admin/products', pathName: 'Products', icon: <FiPackage /> },
		{ link: '/admin/categories', pathName: 'Categories', icon: <FiGrid /> },
		{ link: '/admin/profile', pathName: 'Profile', icon: <FiUser /> },
		{ link: '/admin/employeers', pathName: 'Employeers', icon: <FiUsers /> },
		{ link: '/admin/company', pathName: 'Company', icon: <FiBriefcase /> },
		{ link: '/admin/reports', pathName: 'Reports', icon: <FiActivity /> },
	];

	return (
		<Container>
			<nav>
				<ul>
					{navData.map((data) => (
						<Link to={data.link}>
							<li
								title={data.pathName}
								className={data.link == url ? 'active' : 'inative'}
							>
								{data.icon}
								<span>{data.pathName}</span>
							</li>
						</Link>
					))}
					<li title='Log out' onClick={logUserOut}>
						<FiPower />
						<span>Logout</span>
					</li>
				</ul>
			</nav>
		</Container>
	);
};

export default Aside;
