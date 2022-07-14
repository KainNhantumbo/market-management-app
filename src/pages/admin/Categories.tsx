import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import { CategoriesContainer as Container } from '../../styles/categories';
import {
	FaEdit,
	FaSearch,
	FaTrashAlt,
	HiFolderAdd,
	HiSave,
} from 'react-icons/all';
import fetchAPI from '../../utils/fetchdata';

interface CategoriesProps {
	name: string;
	id: string;
}

export default function Categories(): JSX.Element {
	const [categories, setCategories] = useState<CategoriesProps[]>([
		{ name: 'Acessories', id: 'tatr' },
		{ name: 'Meal', id: 'torvals' },
		{ name: 'Marlalela', id: 'kjbhasdjk' },
	]);

	async function getCategories(): Promise<void> {
		try {
			const { data } = await fetchAPI({ method: 'get', url: '/categories' });
			console.log(data.data);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		getCategories();
	}, []);

	return (
		<Container>
			<Header location='Categories' />
			<Aside />
			<main>
				<section className='upper-container'>
					<div className='title-tools'>
						<h2>Categories</h2>
						<div className='search'>
							<input type={'search'} placeholder={'Search category'} />
							<button>
								<FaSearch />
							</button>
						</div>
					</div>

					<form>
						<label>
							<HiFolderAdd />
							<span>Add new product category</span>
						</label>
						<section>
							<input
								type='text'
								name='category'
								placeholder='Type the product category name.'
								maxLength={250}
							/>
							<button type='submit'>
								<HiSave />
								<span>Save</span>
							</button>
						</section>
					</form>
				</section>

				<article>
					<section className='category-container'>
						{categories.map((category) => {
							return (
								<section key={category.id} className='category'>
									<div>{category.name}</div>
									<div className='actions'>
										<button className='edit'>
											<FaEdit />
										</button>
										<button className='destroy'>
											<FaTrashAlt />
										</button>
									</div>
								</section>
							);
						})}
					</section>
				</article>
			</main>
		</Container>
	);
}
