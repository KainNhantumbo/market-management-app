import { FaFolder, FiArrowLeft, FiCheck } from 'react-icons/all';
import { ModalWithInput as Container } from '../styles/components/modal-with-input';

interface Props {
	title: string;
	errorMessage: string;
	accept: () => void;
	reject: () => void;
	actionName: string;
	placeholder: string;
}

export default function ModalWithInput(props: Props): JSX.Element {
	return (
		<Container className='dialog-modal' onClick={(e) => {}}>
			<div className='dialog-prompt'>
				<div className='prompt-info'>
					<FaFolder />
					<span className='prompt-title'>{props.title}</span>
					<input
						className='prompt-input'
						title={props.placeholder}
						type={'text'}
						placeholder={props.placeholder}
						onChange={(e) => {}}
					/>
				</div>
				<span className='error-message'>{props.errorMessage}</span>
				<div className='prompt-actions'>
					<button className='prompt-cancel' onClick={props.reject}>
						<FiArrowLeft />
						<span>Cancel</span>
					</button>
					<button onClick={props.accept}>
						<FiCheck />
						<span>{props.actionName}</span>
					</button>
				</div>
			</div>
		</Container>
	);
}
