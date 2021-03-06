import React, { ReactNode, useState, useEffect } from 'react';
import { createContext, useContext } from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark, primary } from '../themes/themes';
import { useNavigate } from 'react-router-dom';
interface AppContextProps {
	themeSwitcher: () => void;
	themeSettings: ThemeSettings;
}
interface Props {
	children: ReactNode;
}
interface ThemeSettings {
	dark_mode: boolean;
}

const context = createContext<AppContextProps>({
	themeSwitcher: () => {},
	themeSettings: { dark_mode: false },
});
const AppContext: React.FC<Props> = ({ children }) => {
	const [themeSettings, setThemeSettings] = useState<ThemeSettings>({
		dark_mode: false,
	});
	const [mode, setMode] = useState(primary);

	const themePrefers = (): void => {
		let key: string = 'AppSettings';
		let theme_data: any = JSON.parse(
			localStorage.getItem(key) || `{"dark_mode": false}`
		);

		if (!theme_data.dark_mode || theme_data.dark_mode === undefined) {
			theme_data.dark_mode = false;
			localStorage.setItem(key, JSON.stringify(theme_data));
			setThemeSettings(theme_data);
			setMode(primary);
			return;
		}
		setThemeSettings(theme_data);
		themeSwitcher();
	};

	const themeSwitcher = (): void => {
		if (themeSettings.dark_mode === false) {
			setMode(dark);
			setThemeSettings({ dark_mode: true });
			localStorage.setItem('AppSettings', JSON.stringify({ dark_mode: true }));
			return;
		}
		setMode(primary);
		setThemeSettings({ dark_mode: false });
		localStorage.setItem('AppSettings', JSON.stringify({ dark_mode: false }));
	};

	useEffect(() => {
		themePrefers();
	}, []);

	return (
		<ThemeProvider theme={mode}>
			<GlobalStyles />
			<context.Provider
				value={{
					themeSwitcher,
					themeSettings,
				}}
			>
				{children}
			</context.Provider>
		</ThemeProvider>
	);
};

export const useAppContext = (): AppContextProps => {
	const contextValues = useContext(context);
	return contextValues;
};

export default AppContext;
