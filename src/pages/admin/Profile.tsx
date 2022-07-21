import Aside from '../../components/Aside';
import Header from '../../components/Header';
import DialogBox from '../../components/DialogBox';
import { ProfileContainer as Container } from '../../styles/profile';
import { useState, useEffect } from 'react';
import { calendarDate } from '../../utils/formatTime';
import {
	FaAddressCard,
	FaEnvelope,
	FaGenderless,
	FaLock,
	FaPhoneAlt,
	FaSuperpowers,
	FaUnlock,
	FaUser,
	FaUserEdit,
	FaUserFriends,
	FaUserGraduate,
	FiAlertTriangle,
	FiArrowLeftCircle,
	FiCheck,
	FiEdit,
	FiTrash2,
} from 'react-icons/all';
import type { FormSubmit, Inputs } from '../../types/form';
import useFetchAPI from '../../hooks/useFetch';
import feedBack from '../../utils/feedback';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface ProfileData {
	password: string;
	confirm_password: string;
	phone: string;
	adress: string;
	gender: string;
	age: string;
	department: string;
	qualification: string;
	email: string;
	user_name: string;
	last_name: string;
	first_name: string;
	createdAt: string;
	updatedAt: string;
}

export default function Profile() {
	const [isBtnUpdate, setIsBtnUpdate] = useState(false);
	const [isEditable, setIsEditable] = useState(true);
	const [isModalActive, setIsModalActive] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [profileData, setProfileData] = useState<ProfileData>({
		password: '',
		confirm_password: '',
		phone: '',
		adress: '',
		gender: '',
		age: '',
		department: '',
		qualification: '',
		email: '',
		user_name: '',
		last_name: '',
		first_name: '',
		updatedAt: '',
		createdAt: '',
	});

	const navigate: NavigateFunction = useNavigate();

	// sets the edit mode
	const editFields = (): void => {
		setIsEditable(!isEditable);
		setIsBtnUpdate(!isBtnUpdate);
	};

	const handleChange = (e: Inputs): void => {
		setProfileData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleUpdate = async (e: FormSubmit): Promise<void> => {
		e.preventDefault();
		if (profileData.password?.length >= 6) {
			if (profileData.password !== profileData.confirm_password) {
				return feedBack(
					setErrorMessage,
					'Both password fields must match each other. To cancel, please leave it blank.',
					5000
				);
			}
		}
		try {
			await useFetchAPI({ method: 'patch', url: '/users', data: profileData });
			editFields();
			getProfileInfo();
		} catch (err: any) {
			console.log(err.message);
			feedBack(setErrorMessage, err.response.data.message, 3000);
		}
	};

	const getProfileInfo = (): void => {
		useFetchAPI({
			method: 'get',
			url: '/users',
		})
			.then(({ data }) => {
				setProfileData(data.data);
			})
			.catch((err) => {
				console.error(err);
				feedBack(setErrorMessage, err.response.data.message, 3000);
			});
	};

	const deleteAccount = async (): Promise<void> => {
		try {
			await useFetchAPI({ method: 'delete', url: '/users' });
			localStorage.removeItem('accessToken');
			navigate('/');
		} catch (err: any) {
			console.error(err);
			feedBack(setErrorMessage, err.response.data.message, 3000);
		}
	};

	useEffect(() => {
		getProfileInfo();
	}, []);

	return (
		<Container>
			<Header location='User Profile' />
			<Aside />
			<main>
				{isModalActive && (
					<DialogBox
						closeModal={setIsModalActive}
						prompt_title={'Delete Account'}
						prompt_message={
							'Are you sure? Your account and all data associated with it will be permanently lost. Once done, you cannot undo this action.'
						}
						button_text={'Yes, delete account.'}
						icon={<FiTrash2 />}
						action={deleteAccount}
					/>
				)}
				<section className='upper-container'>
					<h2>
						<span>Account information</span>
					</h2>
					<p>Here you can see and modify your account details.</p>
					<h4>Created at: {calendarDate(profileData.createdAt)}</h4>
					<h4>Last profile update: {calendarDate(profileData.updatedAt)}</h4>
				</section>
				<article className='content-container'>
					<form onSubmit={handleUpdate}>
						<section className='form-section'>
							<div className='form-element'>
								<label>
									<FaUserEdit />
									<span>First name</span>
								</label>
								<input
									type='text'
									placeholder='Type your first name here.'
									name='first_name'
									required
									value={profileData.first_name}
									disabled={isEditable}
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div className='form-element'>
								<label>
									<FaUserEdit />
									<span>Last name</span>
								</label>
								<input
									type='text'
									placeholder='Type your last name here.'
									name='last_name'
									required
									value={profileData.last_name}
									disabled={isEditable}
									onChange={(e) => handleChange(e)}
								/>
							</div>
						</section>
						<section className='form-section'>
							<div className='form-element'>
								<label>
									<FaUser />
									<span>Username</span>
								</label>
								<input
									type='text'
									placeholder='Type your username here.'
									name='user_name'
									value={profileData.user_name}
									required
									disabled={isEditable}
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div className='form-element'>
								<label>
									<FaEnvelope />
									<span>E-mail</span>
								</label>
								<input
									type='email'
									placeholder='Type your e-mail here.'
									name='email'
									required
									value={profileData.email}
									disabled={isEditable}
									onChange={(e) => handleChange(e)}
								/>
							</div>
						</section>

						<section className='form-section'>
							<div className='form-element'>
								<label>
									<FaUserGraduate />
									<span>Qualification</span>
								</label>
								<input
									type='text'
									name='qualification'
									required
									disabled={isEditable}
									value={profileData.qualification}
									placeholder='Type your qualification here.'
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div className='form-element'>
								<label>
									<FaUserFriends />
									<span>Department</span>
								</label>
								<input
									type='text'
									required
									name='department'
									value={profileData.department}
									disabled={isEditable}
									placeholder='Type your department here.'
									onChange={(e) => handleChange(e)}
								/>
							</div>
						</section>

						<section className='form-section'>
							<div className='form-element'>
								<label>
									<FaSuperpowers />
									<span>Age</span>
								</label>
								<input
									type='number'
									name='age'
									placeholder='Type your age here'
									required
									value={profileData.age}
									disabled={isEditable}
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div className='form-element'>
								<label>
									<FaGenderless />
									<span>Gender</span>
								</label>
								<select
									name='gender'
									defaultChecked={true}
									disabled={isEditable}
									value={profileData.gender}
									onChange={(e) => handleChange(e)}
								>
									<option value='Male'>Male</option>
									<option value='Female'>Female</option>
								</select>
							</div>
						</section>

						<section className='form-section'>
							<div className='form-element'>
								<label>
									<FaAddressCard />
									<span>Adress</span>
								</label>
								<input
									type='text'
									name='adress'
									placeholder='Type your adress here.'
									disabled={isEditable}
									value={profileData.adress}
									onChange={(e) => handleChange(e)}
								/>
							</div>
							<div className='form-element'>
								<label>
									<FaPhoneAlt />
									<span>Phone</span>
								</label>
								<input
									type='number'
									name='phone'
									maxLength={30}
									required
									disabled={isEditable}
									value={profileData.phone}
									placeholder='Type your phone number.'
									onChange={(e) => handleChange(e)}
								/>
							</div>
						</section>
						{isBtnUpdate && (
							<label>
								<FiAlertTriangle />
								<span>
									Leave these following fields blank if you don't want to update
									password.
								</span>
							</label>
						)}
						{isBtnUpdate && (
							<section className='form-section'>
								<div className='form-element'>
									<label>
										<FaUnlock />
										<span>Password</span>
									</label>
									<input
										type='password'
										name='password'
										disabled={isEditable}
										value={profileData.password}
										placeholder='Type your password here.'
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className='form-element'>
									<label>
										<FaLock />
										<span>Confirm Password</span>
									</label>
									<input
										type='password'
										name='confirm_password'
										disabled={isEditable}
										value={profileData.confirm_password}
										placeholder='Confirm your password.'
										onChange={(e) => handleChange(e)}
									/>
								</div>
							</section>
						)}

						<span className='errorMessage'>{errorMessage}</span>

						<section className='actions'>
							{!isBtnUpdate && (
								<button className='next' onClick={editFields}>
									<FiEdit />
									<span>Edit</span>
								</button>
							)}
							{isBtnUpdate && (
								<button className='next' onClick={editFields}>
									<FiArrowLeftCircle />
									<span>Cancel</span>
								</button>
							)}
							{isBtnUpdate && (
								<button className='login' type={'submit'}>
									<FiCheck />
									<span>Update</span>
								</button>
							)}
							{!isBtnUpdate && (
								<button
									className='delete'
									onClick={(e) => {
										e.preventDefault();
										setIsModalActive(true);
									}}
								>
									<FiTrash2 />
									<span>Delete Account</span>
								</button>
							)}
						</section>
					</form>
				</article>
			</main>
		</Container>
	);
}
