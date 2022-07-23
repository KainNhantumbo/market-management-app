import { SortContainer as Container } from '../styles/components/sort-items-box';
import {
	FiX,
	FaSort,
	FaSortAlphaDown,
	FaSortAlphaUp,
	FaSortNumericDown,
	FaSortNumericUp,
	FaSortAmountDown,
	BiSortDown,
	BiSortUp,
	BiSortZA,
	BiSortAZ,
} from 'react-icons/all';

interface Props {
	quit: () => void;
}

export default function SortItemsBox(props: Props): JSX.Element {
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
						<div>
							<BiSortAZ />
							<span>Name</span>
						</div>
						<div>
							<BiSortZA />
							<span>Name (ascending)</span>
						</div>
						<div>
							<BiSortDown />
							<span>Created At</span>
						</div>
						<div>
							<BiSortUp />
							<span>Created At (ascending)</span>
						</div>
						<div>
							<BiSortDown />
							<span>Updated At</span>
						</div>
						<div>
							<BiSortUp />
							<span>Updated At (ascending)</span>
						</div>
					</section>
				</section>
			</section>
		</Container>
	);
}
