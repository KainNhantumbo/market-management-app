import { NavigateFunction, useNavigate, Link } from 'react-router-dom';
import { BiCog } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { HomeContainer as Container } from '../styles/home';
import { FC } from 'react';
import { FiLogIn } from 'react-icons/fi';

const Home: FC = (): JSX.Element => {
	const navigate: NavigateFunction = useNavigate();

	return (
		<Container>
			<header>
				<h1>Market Management</h1>
				<h2>What are we going to do today?</h2>
				<Link className='auth' to={'/create-account'}>
					<button>
						<FiLogIn />
						<span>Create account</span>
					</button>
				</Link>
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
						<button onClick={() => navigate('/admin/dashboard')}>
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
