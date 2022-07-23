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
	fn: (query: string) => Promise<void>;
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
									whileHover={{ scale: 1.04 }}
									whileTap={{ scale: 0.8 }}
									onClick={() => {
										props.fn('sort=name,DESC');
										props.quit();
									}}
								>
									<BiSortAZ />
									<span>Name</span>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.04 }}
									whileTap={{ scale: 0.8 }}
									onClick={() => {
										props.fn('sort=name,ASC');
										props.quit();
									}}
								>
									<BiSortZA />
									<span>Name (ascending)</span>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.04 }}
									whileTap={{ scale: 0.8 }}
									onClick={() => {
										props.fn('sort=createdAt,DESC');
										props.quit();
									}}
								>
									<BiSortDown />
									<span>Created At</span>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.04 }}
									whileTap={{ scale: 0.8 }}
									onClick={() => {
										props.fn('sort=createdAt,ASC');
										props.quit();
									}}
								>
									<BiSortUp />
									<span>Created At (ascending)</span>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.04 }}
									whileTap={{ scale: 0.8 }}
									onClick={() => {
										props.fn('sort=updatedAt,DESC');
										props.quit();
									}}
								>
									<BiSortDown />
									<span>Updated At</span>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.04 }}
									whileTap={{ scale: 0.8 }}
									onClick={() => {
										props.fn('sort=updatedAt,ASC');
										props.quit();
									}}
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
