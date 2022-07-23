import { Viewer as Container } from '../styles/components/data-view';
import { FiX } from 'react-icons/fi';
import { Props } from '../types/data-viewer';

export default function DataViewer(props: Props): JSX.Element {
	return (
		<Container
			className='main'
			onClick={(e) => {
				const target = (e as any).target.classList;
				if (target.contains('main')) {
					props.quit();
				}
			}}
		>
			<section className='dialog-modal'>
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
						<button
							className='prompt-cancel'
							onClick={(e) => {
								e.stopPropagation();
								props.quit();
							}}
						>
							<FiX />
							<span>Close</span>
						</button>
					</div>
				</div>
			</section>
		</Container>
	);
}
