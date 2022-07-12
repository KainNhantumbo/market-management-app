import React from 'react';
import { BiGridAlt } from 'react-icons/bi';
import { FaEnvelopeOpen, FaLayerGroup, FaNewspaper } from 'react-icons/fa';
import { AsideContainer as Container } from '../styles/components/aside';
import { Link } from 'react-router-dom';

const Aside: React.FC = (): JSX.Element => {
	return (
		<Container>
			<nav>
				<ul>
					<Link to={'/recipes-blog'}>
						<li title='Dashboard'>
							<BiGridAlt />
							<span>DashBoard</span>
						</li>
					</Link>
					<Link to={'/recipes-blog/posts'}>
						<li title='Publicações'>
							<FaLayerGroup />
							<span>Publicações</span>
						</li>
					</Link>
					<Link to={'/recipes-blog/subscriptors'}>
						<li title='Subscritores da newsletter'>
							<FaNewspaper />
							<span>Subscritores</span>
						</li>
					</Link>
					<Link to={'/recipes-blog/messages'}>
						<li title='Mensagens enviadas'>
							<FaEnvelopeOpen />
							<span>Mensagens</span>
						</li>
					</Link>
				</ul>
			</nav>
		</Container>
	);
};

export default Aside;
