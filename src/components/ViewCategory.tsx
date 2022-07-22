import { Viewer as Container } from '../styles/components/data-view';
import { FiX } from 'react-icons/fi';

interface Props {
	reject: () => void;
	values: DataProps[];
}

interface DataProps {
	title: string;
	details: Details[];
}

interface Details {
	item: string;
}

export default function ViewCategory(props: Props): JSX.Element {
	return (
		<Container>
			<section
				className='dialog-modal'
				onClick={(e) => {
					const target = (e as any).target.classList;
					if (target.contains('dialog-modal')) {
						props.reject();
					}
				}}
			>
				<div className='dialog-prompt'>
					<div className='prompt-info'>
						{props.values.map((item, index) => {
							return (
								<div key={index}>
									<span className='prompt-title'>{item.title}</span>
									{item.details.map((element, index) => {
										return <p key={index.toString()}>{element.item}</p>;
									})}
								</div>
							);
						})}
					</div>
					<div className='prompt-actions'>
						<button className='prompt-cancel' onClick={props.reject}>
							<FiX />
							<span>Close</span>
						</button>
					</div>
				</div>
			</section>
		</Container>
	);
}
