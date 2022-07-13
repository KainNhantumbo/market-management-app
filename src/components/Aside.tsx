import React from 'react';
import {
	FiActivity,
	FiBriefcase,
	FiGrid,
	FiHome,
	FiPackage,
	FiUser,
	FiUsers,
} from 'react-icons/all';
import { AsideContainer as Container } from '../styles/components/aside';
import { Link } from 'react-router-dom';

const Aside: React.FC = (): JSX.Element => {
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
				</ul>
			</nav>
		</Container>
	);
};

export default Aside;
