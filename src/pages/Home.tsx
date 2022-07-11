import { useNavigate } from 'react-router-dom';
import { BiCog } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { HomeContainer as Container } from '../styles/home';
import { FC } from 'react';

const Home: FC = () => {
	const navigate = useNavigate();
	const useNavigatert = {name: 'adda', log: 'ghg'}

	return (
		<Container>
			<header>
				<h1>Administração</h1>
				<h2>O que vamos fazer hoje?</h2>
			</header>
			<main>
				<article className='actions-container'>
					<div className='action'>
						<BiCog className='icon' />
						<span>Gerenciar Recipes Blog</span>
						<button onClick={() => navigate('/recipes-blog')}>
							<FaArrowRight />
							<span>Gerenciar</span>
						</button>
						<button><button/>
					</div>
					<div className='action'>
						<BiCog className='icon' />
						<span>Gerenciar Usuários</span>
						<button onClick={() => navigate('/users')}>
							<FaArrowRight />
							<span>Gerenciar</span>
						</button>
					</div>
				</article>
			</main>
		</Container>
	)
};

export default Home;
