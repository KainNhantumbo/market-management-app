import { SortContainer as Container } from '../styles/components/sort-items-box';
import { motion, AnimatePresence } from 'framer-motion';
import {
	FiX,
	FaSort,
	BiSortDown,
	BiSortUp,
	BiSortZA,
	BiSortAZ,
} from 'react-icons/all';

interface Props {
	quit: () => void;
	active: boolean;
}

export default function SortItemsBox(props: Props): JSX.Element {
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
						exit={{ opacity: 0, scale: 0 }}
					>
						<section className='dialog-prompt'>
							<div className='top'>
								<h2>
									<FaSort />
									<span>Sort by</span>
								</h2>
								<button className='quit' title='Close' onClick={props.quit}>
									<FiX />
								</button>
							</div>
							<section className='prompt-info'>
								<motion.div
									whileHover={{
										scale: 1.04,
									}}
									whileTap={{ scale: 0.8 }}
								>
									<BiSortAZ />
									<span>Name</span>
								</motion.div>
								<motion.div
									whileHover={{
										scale: 1.04,
									}}
									whileTap={{ scale: 0.8 }}
								>
									<BiSortZA />
									<span>Name (ascending)</span>
								</motion.div>
								<motion.div
									whileHover={{
										scale: 1.04,
									}}
									whileTap={{ scale: 0.8 }}
								>
									<BiSortDown />
									<span>Created At</span>
								</motion.div>
								<motion.div
									whileHover={{
										scale: 1.04,
									}}
									whileTap={{ scale: 0.8 }}
								>
									<BiSortUp />
									<span>Created At (ascending)</span>
								</motion.div>
								<motion.div
									whileHover={{
										scale: 1.04,
									}}
									whileTap={{ scale: 0.8 }}
								>
									<BiSortDown />
									<span>Updated At</span>
								</motion.div>
								<motion.div
									whileHover={{
										scale: 1.04,
									}}
									whileTap={{ scale: 0.8 }}
								>
									<BiSortUp />
									<span>Updated At (ascending)</span>
								</motion.div>
							</section>
						</section>
					</motion.section>
				</Container>
			)}
		</AnimatePresence>
	);
}
