import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import { CategoriesContainer as Container } from '../../styles/categories';
import {
	FaEdit,
	FaPaperPlane,
	FaSearch,
	FaTrashAlt,
	HiSave,
} from 'react-icons/all';
import { BiSend } from 'react-icons/bi';

interface CategoriesProps {
	name: string;
	id: string;
}

export default function Categories(): JSX.Element {
	const [category, setcategory] = useState<CategoriesProps>();
	const [categoriesData, setCategoriesData] = useState<CategoriesProps[]>([
		{ name: 'Acessories', id: 'tatr' },
		{ name: 'Meal', id: 'torvals' },
		{ name: 'Marlalela', id: 'kjbhasdjk' },
	]);

	return (
		<Container>
			<Header location='Categories' />
			<Aside />
			<main>
				<section className='upper-container'>
					<div className='title'>
						<h2>Categories</h2>
						<div className='serch'>
							<input type={'search'} placeholder={'Search category'} />
							<button className='search'>
								<FaSearch />
							</button>
						</div>
					</div>

					<form>
						<label>
							<span>Add new product category</span>
						</label>
						<input
							type='text'
							name='category'
							placeholder='Type the product category name.'
							max-maxLength={250}
						/>
						<button type='submit'>
							<HiSave />
							<span>Save</span>
						</button>
					</form>
				</section>
				<article>
					{categoriesData.map((category) => {
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
				</article>
			</main>
		</Container>
	);
}
