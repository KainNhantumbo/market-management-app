import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import { CategoriesContainer as Container } from '../../styles/categories';
import { FaSearch, FiEdit, FiTrash2, HiPlusSm } from 'react-icons/all';
import { FormSubmit, Inputs } from '../../types/form';
import useFetchAPI from '../../hooks/useFetch';
import { correctWindow } from '../../utils/window';
import AddCategory from '../../components/AddCategory';
import feedBack from '../../utils/feedback';

interface CategoriesProps {
	name: string;
	id: string;
}

interface Category {
	name: string;
	description: string;
}

export default function Categories(): JSX.Element {
	const [categories, setCategories] = useState<CategoriesProps[]>([]);
	const [isAddModalActive, setIsAddModalActive] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [formData, setFormData] = useState<Category>({
		name: '',
		description: '',
	});

	const handleChange = (e: Inputs): void => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

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
		if (formData.name === '') {
			feedBack(setErrorMessage, 'Name field must not be empty.', 3000);
			return;
		}
		try {
			await useFetchAPI({
				method: 'post',
				url: '/categories',
				data: formData,
			});
			setIsAddModalActive(false);
			setFormData(() => ({ name: '', description: '' }));
			getCategories();
			(e as any).target.reset();
		} catch (err: any) {
			console.log(err);
			feedBack(setErrorMessage, err.response.message, 5000);
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
		correctWindow();
	}, []);

	return (
		<Container>
			<Header location='Categories' />
			<Aside />
			<main>
				{isAddModalActive && (
					<AddCategory
						errorMessage={errorMessage}
						reject={setIsAddModalActive}
						coletor={handleChange}
						accept={handleSubmit}
					/>
				)}
				<section className='upper-container'>
					<div className='title-tools'>
						<h2>Categories</h2>
						<div className='search'>
							<input type={'search'} placeholder={'Search category'} />
							<button>
								<FaSearch />
							</button>
						</div>
						<div className='add'>
							<button onClick={() => setIsAddModalActive(true)}>
								<HiPlusSm />
								<span>Add new category</span>
							</button>
						</div>
					</div>
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
