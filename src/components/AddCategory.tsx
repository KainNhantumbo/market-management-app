import React from 'react';
import { FiArrowLeft, FiCheck, HiViewGrid } from 'react-icons/all';
import { ModalWithInput as Container } from '../styles/components/modal-with-input';
import { FormSubmit, Inputs } from '../types/form';

type data = {
	name: string;
	description: string;
};

interface Props {
	errorMessage: string;
	accept: (e: FormSubmit) => Promise<void>;
	coletor: (e: Inputs) => void;
	reject: () => void;
	values?: data;
	title: string;
}

export default function AddCategory(props: Props): JSX.Element {
	return (
		<Container
			className='dialog-modal'
			onClick={(e) => {
				const target = (e as any).target.classList;
				if (target.contains('dialog-modal')) {
					props.reject();
				}
			}}
		>
			<form onSubmit={props.accept} className='dialog-prompt'>
				<div className='prompt-info'>
					<label>
						<HiViewGrid />
						<span>{props.title}</span>
					</label>
					<input
						className='prompt-input'
						type={'text'}
						placeholder={'Type the category name.'}
						name='name'
						value={props.values?.name}
						onChange={props.coletor}
						maxLength={250}
					/>
					<textarea
						rows={8}
						placeholder={'Type category description.'}
						name={'description'}
						value={props.values?.description}
						onChange={props.coletor}
						maxLength={250}
					/>
				</div>
				<span className='error-message'>{props.errorMessage}</span>
				<div className='prompt-actions'>
					<button className='prompt-cancel' onClick={props.reject}>
						<FiArrowLeft />
						<span>Cancel</span>
					</button>
					<button type='submit' className='prompt-accept'>
						<FiCheck />
						<span>Save</span>
					</button>
				</div>
			</form>
		</Container>
	);
}
