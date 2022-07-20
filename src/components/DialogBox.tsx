import { ConfirmModalContainer as Container } from '../styles/components/confirm-modal';
import { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

interface Props {
	prompt_title: string;
	prompt_message: string;
	button_text: string;
	closeModal: React.Dispatch<React.SetStateAction<boolean>>;
	icon: JSX.Element;
	action: () => Promise<void> | void;
}

const DialogBox: FC<Props> = ({
	prompt_title,
	prompt_message,
	button_text,
	closeModal,
	action,
	icon,
}): JSX.Element => {
	return (
		<Container>
			<section className='dialog-modal' onClick={(e) => {}}>
				<div className='dialog-prompt'>
					<div className='prompt-info'>
						<span className='prompt-title'>{prompt_title}</span>
						<p className='prompt-message'>{prompt_message}</p>
					</div>
					<div className='prompt-actions'>
						<button className='prompt-cancel' onClick={() => closeModal(false)}>
							<FaArrowLeft />
							<span>Cancel</span>
						</button>
						<button className='prompt-accept' onClick={action}>
							{icon}
							<span>{button_text}</span>
						</button>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default DialogBox;
