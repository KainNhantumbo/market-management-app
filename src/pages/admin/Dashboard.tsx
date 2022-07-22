import Aside from '../../components/Aside';
import Header from '../../components/Header';
import { DashboardContainer as Container } from '../../styles/admin-dashboard';
import { useState, useEffect } from 'react';
import { correctWindow } from '../../utils/window';

export default function Dashboard() {
	useEffect(() => {
		correctWindow();
	}, []);
	return (
		<Container>
			<Aside />
			<Header location='Dashboard' />
			<main>
			
				<article className='page'>
					<section className='cards-container'>d</section>
				</article>
			</main>
		</Container>
	);
}
