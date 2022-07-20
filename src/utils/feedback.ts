import { SetStateAction } from 'react';

type state = (message: SetStateAction<string>) => void;

function feedBack(fn: state, message: string, delay: number) {
	fn(message);
	setTimeout(() => {
		fn('');
	}, delay);
}

export default feedBack;
