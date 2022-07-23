import { Viewer as Container } from '../styles/components/data-view';
import { FiX } from 'react-icons/fi';
import { Props } from '../types/data-viewer';
import { motion, AnimatePresence } from 'framer-motion';

export default function DataViewer(props: Props): JSX.Element {
	return (
		<AnimatePresence>
			{props.active && (
				<Container
					className='main'
					onClick={(e) => {
						const target = (e as any).target.classList;
						if (target.contains('main')) {
							props.quit();
						}
					}}
				>
					<motion.section
						className='dialog-modal'
						initial={{ opacity: 0, scale: 0 }}
						animate={{
							opacity: 1,
							scale: 1,
							transition: {
								duration: 0.3,
							},
						}}
						exit={{ opacity: 0, scale: 0, transition: { delay: 0.28 } }}
					>
						<div className='dialog-prompt'>
							<motion.div
								className='prompt-info'
								initial={{ opacity: 0, scale: 0, y: 90 }}
								animate={{
									opacity: 1,
									scale: 1,
									y: 0,
									transition: {
										duration: 0.3,
										delay: 0.28,
									},
								}}
								exit={{
									opacity: 0,
									scale: 0,
									y: 90,
									transition: {
										duration: 0.3,
									},
								}}
							>
								{props.data.map((item, index) => {
									return (
										<div key={index} className={'item'}>
											<span className='prompt-title'>{item.title}</span>
											<p key={index.toString()}>{item.details}</p>
										</div>
									);
								})}
							</motion.div>
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
					</motion.section>
				</Container>
			)}
		</AnimatePresence>
	);
}
