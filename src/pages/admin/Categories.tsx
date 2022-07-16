import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import { CategoriesContainer as Container } from '../../styles/categories';
import { FaPlus, FaSearch, FiEdit, FiTrash, HiSave } from 'react-icons/all';
import { fetchAPI, getToken } from '../../utils/fetchdata';
import { FormSubmit } from '../../types/form';

interface CategoriesProps {
	name: string;
	id: string;
}

interface Category {
	name: string;
}

export default function Categories(): JSX.Element {
	const [categories, setCategories] = useState<CategoriesProps[]>([]);
	const [formData, setFormData] = useState<Category>({ name: '' });

	async function getCategories(): Promise<void> {
		try {
			const token = getToken();
			const { data } = await fetchAPI({
				method: 'get',
				url: '/categories',
				headers: {
					authorization: token,
				},
			});
			setCategories(data.data);
		} catch (err) {
			console.log(err);
		}
	}

	// sends formdata to server
	async function handleSubmit(e: FormSubmit): Promise<void> {
		e.preventDefault();
		const token = getToken();
		if (formData.name === '') return;
		try {
			await fetchAPI({
				method: 'post',
				url: '/categories',
				data: formData,
				headers: {
					authorization: token,
				},
			});
			getCategories();
			setFormData(() => ({ name: '' }));
			(e as any).target.reset();
		} catch (err) {
			console.log(err);
		}
	}

	async function deleteCategory(id: string): Promise<void> {
		const token = getToken();
		try {
			await fetchAPI({
				method: 'delete',
				url: `/categories/${id}`,
				headers: {
					authorization: token,
				},
			});
			getCategories();
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

					<form onSubmit={handleSubmit}>
						<label>
							<FaPlus />
							<span>Add new product category</span>
						</label>
						<section>
							<input
								type='text'
								name='category'
								placeholder='Type the product category name.'
								maxLength={250}
								onChange={(e) =>
									setFormData((prevData) => ({
										...prevData,
										name: e.target.value,
									}))
								}
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
										<button className='edit' title='Edit'>
											<FiEdit />
										</button>
										<button
											className='destroy'
											title='Delete'
											onClick={() => deleteCategory(category.id)}
										>
											<FiTrash />
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
