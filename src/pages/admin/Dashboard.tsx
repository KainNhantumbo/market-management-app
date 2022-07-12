import * as React from 'react';
import Aside from '../../components/Aside';
import { DashboardContainer as Container } from '../../styles/dashboard';

export default function Dashboard() {
	return (
		<Container>
			<Aside />
		</Container>
	);
}
