import { ConfirmModalContainer as Container } from '../styles/components/confirm-modal';
import { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface Props {
	reject: () => void;
	values: string[];
	title: string;
}

export default function ViewCategory(props: Props): JSX.Element {
	return (
		<Container>
			<section className='dialog-modal' onClick={(e) => {}}>
				<div className='dialog-prompt'>
					<div className='prompt-info'>
						<span className='prompt-title'></span>
					</div>
					<div className='prompt-actions'>
						<button className='prompt-cancel' onClick={props.reject}>
							<FaArrowLeft />
							<span>Close</span>
						</button>
					</div>
				</div>
			</section>
		</Container>
	);
}
