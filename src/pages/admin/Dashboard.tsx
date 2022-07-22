import Aside from '../../components/Aside';
import Header from '../../components/Header';
import { DashboardContainer as Container } from '../../styles/admin-dashboard';
import { useState, useEffect } from 'react';
import { correctWindow } from '../../utils/window';
import ViewCategory from '../../components/ViewCategory';

export default function Dashboard() {
	useEffect(() => {
		correctWindow();
	}, []);
	return (
		<Container>
			<Aside />
			<Header location='Dashboard' />
			<main>
				<ViewCategory
					reject={() => {}}
					values={[
						{
							title: 'Super Creator',
							details: [
								{ item: 'Notes' },
								{ item: 'notes' },
								{ item: 'sdbfisbdo fisdfs,dpfmspd nmfpsj pdofnpsmdf smd[pfm' },
							],
						},
						{
							title: 'Super Creatosdr',
							details: [
								{ item: 'Notes' },
								{ item: 'notes' },
								{ item: 'sdbfisbdofisdfs,dpfmspdnmfpsjpdofnpsmdfsmd[pfm' },
							],
						},
					]}
				/>
				<article className='page'>
					<section className='cards-container'>d</section>
				</article>
			</main>
		</Container>
	);
}
