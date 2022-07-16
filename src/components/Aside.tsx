import React from 'react';
import {
	FiActivity,
	FiBriefcase,
	FiGrid,
	FiHome,
	FiLogOut,
	FiPackage,
	FiUser,
	FiUsers,
} from 'react-icons/all';
import { AsideContainer as Container } from '../styles/components/aside';
import { Link, useNavigate } from 'react-router-dom';

const Aside: React.FC = (): JSX.Element => {
	// log the user out and delete access token from storage
	const logUserOut = () => {
		localStorage.removeItem('accessToken');
		const navigate = useNavigate();
		navigate('/');
	};

	return (
		<Container>
			<nav>
				<ul>
					<Link to={'/admin/dashboard'}>
						<li title='Dashboard'>
							<FiHome />
							<span>DashBoard</span>
						</li>
					</Link>
					<Link to={'/admin/products'}>
						<li title='Products'>
							<FiPackage />
							<span>Products</span>
						</li>
					</Link>
					<Link to={'/admin/categories'}>
						<li title='Categories'>
							<FiGrid />
							<span>Categories</span>
						</li>
					</Link>
					<Link to={'/admin/profile'}>
						<li title='Profile'>
							<FiUser />
							<span>Profile</span>
						</li>
					</Link>
					<Link to={'/admin/employeers'}>
						<li title='Employeers'>
							<FiUsers />
							<span>Employeers</span>
						</li>
					</Link>
					<Link to={'/admin/company'}>
						<li title='Company'>
							<FiBriefcase />
							<span>Company</span>
						</li>
					</Link>
					<Link to={'/admin/reports'}>
						<li title='Reports'>
							<FiActivity />
							<span>Reports</span>
						</li>
					</Link>
					<li title='Reports' onClick={logUserOut}>
						<FiLogOut />
						<span>Logout</span>
					</li>
				</ul>
			</nav>
		</Container>
	);
};

export default Aside;
