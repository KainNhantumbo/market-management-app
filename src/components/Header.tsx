import { HeaderContainer as Container } from '../styles/components/header';
import { FC, useState, useEffect } from 'react';
import { HiMoon, HiSun } from 'react-icons/all';
import { useAppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

interface Props {
	location: string;
}

const Header: FC<Props> = ({ location }) => {
	const { themeSwitcher, themeSettings } = useAppContext();
	const [modeIcon, setModeIcon] = useState(<HiSun />);

	function handleIcon(): void {
		if (themeSettings.dark_mode) return setModeIcon(<HiMoon />);
		setModeIcon(<HiSun />);
	}

	useEffect(() => {
		handleIcon();
	}, []);

	return (
		<Container>
			<h2 className='brand'>
				<span>Administration</span>
			</h2>
			<motion.button
				whileTap={{ scale: 0.8 }}
				onClick={() => {
					themeSwitcher();
					handleIcon();
				}}
			>
				{modeIcon}
			</motion.button>
			<p title={location}>{location}</p>
		</Container>
	);
};

export default Header;
