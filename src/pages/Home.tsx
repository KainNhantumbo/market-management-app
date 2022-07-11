import { useNavigate } from 'react-router-dom';
import { BiCog } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { HomeContainer as Container } from '../styles/home';
import { FC } from 'react';

const Home: FC = () => {
	const navigate = useNavigate();

	return (
		<Container>
			<header>
				<h1>Supermarket Management System</h1>
				<h2>Choose your path to work on</h2>
			</header>
			<main>
				<article className='actions-container'>
					<div className='action'>
						<BiCog className='icon' />
						<span>Employeers</span>
						<button onClick={() => navigate('/sales')}>
							<FaArrowRight />
							<span>Sales workflow</span>
						</button>
					</div>
					<div className='action'>
						<BiCog className='icon' />
						<span>Administrator</span>
						<button onClick={() => navigate('/admin')}>
							<FaArrowRight />
							<span>Manage system</span>
						</button>
					</div>
				</article>
			</main>
		</Container>
	);
};

export default Home;
