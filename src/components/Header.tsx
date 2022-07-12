import { HeaderContainer as Container } from '../styles/components/header';
import { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Props {
	location: string;
}

const Header: FC<Props> = ({ location }) => {
	const navigate = useNavigate();
	return (
		<Container>
			<h2
				title='Página inicial'
				className='brand'
				onClick={() => navigate('/')}
			>
				<FaPlus />
				<span>Administration</span>
			</h2>

			<p title={location}>{location}</p>
		</Container>
	);
};

export default Header;
