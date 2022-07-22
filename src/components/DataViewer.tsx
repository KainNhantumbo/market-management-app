import { Viewer as Container } from '../styles/components/data-view';
import { FiX } from 'react-icons/fi';

interface Props {
	quit: () => void;
	data: DataProps[];
}

export type DataViewerInterface = DataProps[];

interface DataProps {
	title: string;
	details: string;
}

export default function DataViewer(props: Props): JSX.Element {
	return (
		<Container>
			<section
				className='dialog-modal'
				onClick={(e) => {
					const target = (e as any).target.classList;
					if (target.contains('dialog-modal')) {
						props.quit();
					}
				}}
			>
				<div className='dialog-prompt'>
					<div className='prompt-info'>
						{props.data.map((item, index) => {
							return (
								<div key={index} className={'item'}>
									<span className='prompt-title'>{item.title}</span>
									<p key={index.toString()}>{item.details}</p>
								</div>
							);
						})}
					</div>
					<div className='prompt-actions'>
						<button className='prompt-cancel' onClick={props.quit}>
							<FiX />
							<span>Close</span>
						</button>
					</div>
				</div>
			</section>
		</Container>
	);
}
