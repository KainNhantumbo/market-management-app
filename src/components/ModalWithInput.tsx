import { FC, useState } from 'react';
import { FaArrowLeft, FaFolder, FaFolderPlus } from 'react-icons/all';
import { ModalWithInput as Container } from '../styles/components/modal-with-input';

interface Props {
	title: string;
	errorMessage: string;
	accept: () => void;
	reject: () => void;
	actionName: string;
	placeholder: string
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
					<button className='prompt-cancel' onClick={(e) => props.reject()}>
						<FaArrowLeft />
						<span>Cancel</span>
					</button>
					<button onClick={(e) => props.accept()}>
						<FaFolderPlus />
						<span>{props.actionName}</span>
					</button>
				</div>
			</div>
		</Container>
	);
}
