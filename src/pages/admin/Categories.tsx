import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import { CategoriesContainer as Container } from '../../styles/categories';
import {
	FaPlus,
	FaSearch,
	FiEdit,
	FiTrash,
	FiTrash2,
	HiSave,
} from 'react-icons/all';
import { FormSubmit } from '../../types/form';
import useFetchAPI from '../../hooks/useFetch';

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
			const { data } = await useFetchAPI({
				method: 'get',
				url: '/categories',
			});
			setCategories(data.data);
		} catch (err) {
			console.log(err);
		}
	}

	// sends formdata to server
	async function handleSubmit(e: FormSubmit): Promise<void> {
		e.preventDefault();
		if (formData.name === '') return;
		try {
			await useFetchAPI({
				method: 'post',
				url: '/categories',
				data: formData,
			});
			getCategories();
			setFormData(() => ({ name: '' }));
			(e as any).target.reset();
		} catch (err) {
			console.log(err);
		}
	}

	async function deleteCategory(id: string): Promise<void> {
		try {
			await useFetchAPI({
				method: 'delete',
				url: `/categories/${id}`,
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
					<section className='description-bar'>
						<div className='description-titles'>
							<div className='name'>
								<span>Name</span>
							</div>
							<div className=''>
								<span>Description</span>
							</div>
						</div>
						<div className='description-actions'>
							<span>Actions</span>
						</div>
					</section>
					<section className='category-container'>
						{categories.map((category) => {
							return (
								<section key={category.id} className='category'>
									<section className='data'>
										<div className='name'>{category.name}</div>
										<div className='description'>{category.name}</div>
									</section>
									<div className='actions'>
										<button className='edit' title='Edit'>
											<FiEdit />
										</button>
										<button
											className='destroy'
											title='Delete'
											onClick={() => deleteCategory(category.id)}
										>
											<FiTrash2 />
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
