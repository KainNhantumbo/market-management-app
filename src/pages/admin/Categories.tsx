import {
	FaSearch,
	FiEdit,
	FiTrash2,
	HiPlusCircle,
	HiRefresh,
	HiSortDescending,
	HiViewGrid,
} from 'react-icons/all';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import { CategoriesContainer as Container } from '../../styles/categories';
import { FormSubmit, Inputs } from '../../types/form';
import useFetchAPI from '../../hooks/useFetch';
import { correctWindow } from '../../utils/window';
import AddCategory from '../../components/AddCategory';
import feedBack from '../../utils/feedback';
import DataViewer from '../../components/DataViewer';
import { DataViewerInterface } from '../../types/data-viewer';
import SortItemsBox from '../../components/SortItemsBox';
import { motion } from 'framer-motion';

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
	const [isSortActive, setIsSortActive] = useState(false);
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

	// search handler function
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

	// sends created category to the server
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
			console.error(err);
			feedBack(setErrorMessage, err.response.data.message, 5000);
		}
	}

	const getCategoryForUpdate = (id: number) => {
		const [category] = categories.filter((element) => element.id === id);
		setFormData(category);
		setIsUpdate({ mode: true, id: id });
	};

	const getCategoryForViewer = (id: number): void => {
		const [category] = categories.filter((element) => element.id === id);
		const data: DataViewerInterface = [
			{ title: 'Name', details: category.name },
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
			console.error(err);
		}
	}

	// cancels create or update operations by removing the modal
	const cancelOps = (): void => {
		if (isAddModalActive) return setIsAddModalActive(false);
		setIsUpdate((prevState) => ({ ...prevState, mode: false }));
	};

	// quits data viewer modal
	const quitViewer = (): void => setIsViewerActive(false);
	// quits sort modal
	const quitSort = (): void => setIsSortActive(false);

	useEffect(() => {
		getCategories();
		correctWindow();
	}, []);

	return (
		<Container>
			<Header location='Categories' />
			<Aside />
			<main>
				<AddCategory
					active={isAddModalActive}
					errorMessage={errorMessage}
					reject={cancelOps}
					coletor={handleChange}
					accept={handleSubmit}
					title={'Add new category'}
				/>
				<AddCategory
					active={isUpdate.mode}
					errorMessage={errorMessage}
					reject={cancelOps}
					coletor={handleChange}
					accept={handleUpdate}
					title={'Update category'}
					values={formData}
				/>
				<DataViewer
					active={isViewerActive}
					quit={quitViewer}
					data={categoryViewer}
					icon={<HiViewGrid />}
					title={'Category Previewer'}
				/>
				<SortItemsBox active={isSortActive} quit={quitSort} />

				<section className='upper-container'>
					<div className='title-tools'>
						<section className='title'>
							<h2>Categories</h2>
							<div className='amount'>
								<span>{categories.length} items</span>
							</div>
						</section>
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
							<div className='functions'>
								<button title='Sort by' onClick={() => setIsSortActive(true)}>
									<HiSortDescending />
								</button>
								<button title='Refresh' onClick={getCategories}>
									<HiRefresh />
								</button>
							</div>
							<div className='add'>
								<button onClick={() => setIsAddModalActive(true)}>
									<HiPlusCircle />
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
								<motion.section key={category.id} className='category'
								whileTap={{scale: 0.9}}
								>
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
								</motion.section>
							);
						})}
					</section>
				</article>
			</main>
		</Container>
	);
}
