import Aside from '../../components/Aside';
import Header from '../../components/Header';
import { ProfileContainer as Container } from '../../styles/profile';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchAPI from '../../utils/fetchdata';
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
	FiCheck,
	FiEdit,
} from 'react-icons/all';
import type { FormSubmit, Inputs } from '../../types/form';

interface UserData {
	username: string;
	password: string;
}

export default function Profile() {
	const [isBtnUpdate, setIsBtnUpdate] = useState(false);
	const [isEditable, setIsEditable] = useState(false);

	const [formData, setFormData] = useState<UserData>({
		username: '',
		password: '',
	});
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const handleChange = (e: Inputs): void => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: FormSubmit): Promise<void> => {
		e.preventDefault();
		try {
			const { data: user } = await fetchAPI({});
			localStorage.setItem(
				'accessToken',
				JSON.stringify({ token: user.token })
			);
			navigate('/');
		} catch (err: any) {
			console.log(err.message);
			displayErrors(err.response.data.message);
		}
	};
  
	const displayErrors = (message: string): void => {
		setErrorMessage(message);
		setTimeout(() => {
			setErrorMessage('');
		}, 3000);
	};

	return (
		<Container>
			<Header location='User Profile' />
			<Aside />
			<main>
				<section className='upper-container'>
					<h2>
						<span>General information</span>
					</h2>
				</section>
				<article className='content-container'>
					<form onSubmit={handleSubmit}>
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
									required
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
									defaultValue={'Male'}
									defaultChecked={true}
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
									placeholder='Type your phone number.'
									onChange={(e) => handleChange(e)}
								/>
							</div>
						</section>

						<section className='form-section'>
							<div className='form-element'>
								<label>
									<FaUnlock />
									<span>Password</span>
								</label>
								<input
									type='password'
									name='password'
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
									type='confirm_password'
									name='confirm_password'
									placeholder='Confirm your password.'
									onChange={(e) => handleChange(e)}
								/>
							</div>
						</section>

						<span className='errorMessage'>{errorMessage}</span>

						<section className='actions'>
							{isBtnUpdate ? null : (
								<button className='next'>
									<FiEdit />
									<span>Edit</span>
								</button>
							)}
							{isBtnUpdate ? (
								<button
									className='login'
									type='submit'
									onClick={() => navigate('/login')}
								>
									<FiCheck />
									<span>Update</span>
								</button>
							) : null}
						</section>
					</form>
				</article>
			</main>
		</Container>
	);
}
