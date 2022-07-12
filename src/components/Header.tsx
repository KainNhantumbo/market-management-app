import { HeaderContainer as Container } from '../styles/components/header';
import { FC, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/all';
import { useAppContext } from '../context/AppContext';

interface Props {
	location: string;
}

const Header: FC<Props> = ({ location }) => {
	const { themeSwitcher } = useAppContext();
	const [modeIcon, setModeIcon] = useState({ mode: 'light', icon: <HiSun /> });

	function handleIcon() {
		if (modeIcon.mode === 'light') {
			setModeIcon({ mode: 'dark', icon: <HiMoon /> });
		} else {
			setModeIcon({ mode: 'light', icon: <HiSun /> });
		}
	}

	return (
		<Container>
			<h2 className='brand'>
				<span>Administration</span>
			</h2>
			<button
				onClick={() => {
					themeSwitcher();
					handleIcon();
				}}
			>
				{modeIcon.icon}
			</button>
			<p title={location}>{location}</p>
		</Container>
	);
};

export default Header;
