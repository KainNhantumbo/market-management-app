import { Viewer as Container } from '../styles/components/data-view';
import { Props } from '../types/data-viewer';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/all';

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
							<div className='top'>
								<h2>
									{props.icon}
									<span>{props.title}</span>
								</h2>
								<button className='quit' title='Close' onClick={props.quit}>
									<FiX />
								</button>
							</div>
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
								{props.data.content.map((item, index) => {
									return (
										<section key={index} className={'item'}>
											<span className='prompt-title'>{item.title}</span>
											<p key={index.toString()}>{item.details}</p>
										</section>
									);
								})}
								<div className='timestamps'>
									<h5>
										<span>{props.data.timestamps.createdAt}</span>
									</h5>
									<h5>
										<span>{props.data.timestamps.updatedAt}</span>
									</h5>
								</div>
							</motion.div>
						</div>
					</motion.section>
				</Container>
			)}
		</AnimatePresence>
	);
}
