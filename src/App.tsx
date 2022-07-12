import * as React from 'react';
import AppContext from './context/AppContext';
import Routes from './routes/Routes';

const App: React.FC = () => {
	return (
		<AppContext>
			<Routes />
		</AppContext>
	);
};

export default App;
