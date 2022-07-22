import { FaFolder, FiArrowLeft, FiCheck, HiViewGrid } from 'react-icons/all';
import { ModalWithInput as Container } from '../styles/components/modal-with-input';
import { FormSubmit, Inputs } from '../types/form';

interface Props {
	errorMessage: string;
	accept: (e: FormSubmit) => Promise<void>;
	coletor: (e: Inputs) => void;
	reject: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddCategory(props: Props): JSX.Element {
	return (
		<Container
			className='dialog-modal'
			onClick={(e) => {
				const target = (e as any).target.classList;
				if (target.contains('dialog-modal')) props.reject(false);
			}}
		>
			<form onSubmit={props.accept} className='dialog-prompt'>
				<div className='prompt-info'>
					<HiViewGrid />
					<span className='prompt-title'>Add new category</span>
					<input
						className='prompt-input'
						type={'text'}
						placeholder={'Type the category name.'}
						name='name'
						onChange={props.coletor}
            maxLength={250}
					/>
					<textarea
						rows={5}
						placeholder={'Type category description.'}
						name={'description'}
						onChange={props.coletor}
            maxLength={250}
					/>
				</div>
				<span className='error-message'>{props.errorMessage}</span>
				<div className='prompt-actions'>
					<button className='prompt-cancel' onClick={() => props.reject(false)}>
						<FiArrowLeft />
						<span>Cancel</span>
					</button>
					<button type='submit' className='prompt-accept'>
						<FiCheck />
						<span>Add category</span>
					</button>
				</div>
			</form>
		</Container>
	);
}
