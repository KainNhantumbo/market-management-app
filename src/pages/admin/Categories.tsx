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
import DataViewer from '../../components/DataViewer';
import { DataViewerInterface } from '../../types/data-viewer';

interface CategoriesProps {
	name: string;
	description: string;
	id: number;
}

interface Category {
	name: string;
	description: string;
}

export default function Categories(): JSX.Element {
	const [searchItems, setSearchItems] = useState('');
	const [categories, setCategories] = useState<CategoriesProps[]>([]);
	const [categoryViewer, setCategoryViewer] = useState<DataViewerInterface>([]);
	const [isAddModalActive, setIsAddModalActive] = useState(false);
	const [isUpdate, setIsUpdate] = useState({ mode: false, id: 0 });
	const [errorMessage, setErrorMessage] = useState('');
	const [formData, setFormData] = useState<Category>({
		name: '',
		description: '',
	});
	const [isViewerActive, setIsViewerActive] = useState(false);

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
			console.error(err);
		}
	}

	// search
	const handleSearch = async (): Promise<void> => {
		try {
			const { data } = await useFetchAPI({
				method: 'get',
				url: `/categories?search=${searchItems}`,
			});
			setCategories(data.data);
		} catch (err) {
			console.error(err);
		}
	};

	// sends formdata to server
	async function handleSubmit(e: FormSubmit): Promise<void> {
		e.preventDefault();
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
			feedBack(setErrorMessage, err.response.data.message, 5000);
		}
	}

	async function handleUpdate(e: FormSubmit): Promise<void> {
		e.preventDefault();
		if (formData.name === '' || formData.description === '') {
			return feedBack(
				setErrorMessage,
				'Please fill all the fields to update category.',
				3000
			);
		}
		try {
			await useFetchAPI({
				method: 'patch',
				url: `/categories/${isUpdate.id}`,
				data: formData,
			});
			setIsAddModalActive(false);
			setFormData(() => ({ name: '', description: '' }));
			cancelOps();
			getCategories();
			(e as any).target.reset();
		} catch (err: any) {
			console.log(err);
			feedBack(setErrorMessage, err.response.data.message, 5000);
		}
	}

	const getCategoryForUpdate = (id: number) => {
		const [category] = categories.filter((element) => {
			return element.id === id;
		});
		setFormData(category);
		setIsUpdate({ mode: true, id: id });
	};

	const getCategoryForViewer = (id: number): void => {
		const [category] = categories.filter((element) => {
			return element.id === id;
		});
		const data: DataViewerInterface = [
			{ title: 'Category', details: category.name },
			{ title: 'Description', details: category.description },
		];
		setCategoryViewer(data);
		setIsViewerActive(true);
	};

	async function deleteCategory(id: number): Promise<void> {
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

	// cancels create or update operations by removing the modal
	const cancelOps = (): void => {
		if (isAddModalActive) {
			setIsAddModalActive(false);
			return;
		}
		setIsUpdate((prevState) => ({ ...prevState, mode: false }));
	};

	// quits data viewer
	const quitViewer = (): void => {
		setIsViewerActive(false);
	};

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
						reject={cancelOps}
						coletor={handleChange}
						accept={handleSubmit}
						title={'Add new category'}
					/>
				)}
				{isUpdate.mode && (
					<AddCategory
						errorMessage={errorMessage}
						reject={cancelOps}
						coletor={handleChange}
						accept={handleUpdate}
						title={'Update category'}
						values={formData}
					/>
				)}
				{isViewerActive && (
					<DataViewer quit={quitViewer} data={categoryViewer} />
				)}

				<section className='upper-container'>
					<div className='title-tools'>
						<h2>Categories</h2>
						<section className='container'>
							<div className='search'>
								<input
									type={'search'}
									placeholder={'Search category'}
									onChange={(e) => {
										setSearchItems(e.target.value);
										if (e.target.value.length < 1) {
											getCategories();
										}
									}}
								/>
								<button onClick={handleSearch}>
									<FaSearch />
								</button>
							</div>
							<div className='add'>
								<button onClick={() => setIsAddModalActive(true)}>
									<HiPlusSm />
									<span>Add new category</span>
								</button>
							</div>
						</section>
					</div>
				</section>

				<article>
					<section className='description-bar'>
						<div className='description-titles'>
							<div className='name'>
								<span>Name</span>
							</div>
							<div className='description'>
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
									<section
										className='data'
										onClick={() => getCategoryForViewer(category.id)}
									>
										<div className='name'>{category.name}</div>
										<div className='description'>{category.description}</div>
									</section>
									<div className='actions'>
										<button
											className='edit'
											title='Edit'
											onClick={(e) => getCategoryForUpdate(category.id)}
										>
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
