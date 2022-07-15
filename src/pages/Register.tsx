import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterContainer as Container } from '../styles/register';
import {
	FaAddressCard,
	FaEnvelope,
	FaGenderless,
	FaLock,
	FaPhoneAlt,
	FaSuperpowers,
	FaUnlock,
	FaUnlockAlt,
	FaUser,
	FaUserEdit,
	FaUserFriends,
	FaUserGraduate,
	BiLogInCircle,
} from 'react-icons/all';
import { FormSubmit, Inputs } from '../types/form';
import fetchAPI from '../utils/fetchdata';

interface UserData {
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
}

export default function Register() {
	const [formData, setFormData] = useState<UserData>({
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
	});
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const handleChange = (e: Inputs): void => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: FormSubmit) => {
		e.preventDefault();
		if (formData.password !== formData.confirm_password) {
			displayErrors('Passwords must match each other.');
			return null;
		} else if (formData.password.length < 6) {
			displayErrors('Password must have at least 6 characteres.');
			return null;
		}
		try {
			const { data: user } = await fetchAPI({
				method: 'post',
				url: '/auth/register',
				data: formData,
			});
			localStorage.setItem(
				'accessToken',
				JSON.stringify({ token: user.token })
			);
			navigate('/company-setup');
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
			<header className='upper-container'>
				<section className='logo'>
					<h1>
						<span>Marketeer</span>
					</h1>
				</section>
				<section className='slogan'>
					<h2>
						<span>Market Management</span>
					</h2>
				</section>
			</header>
			<main>
				<article>
					<div className='form-container'>
						<section className='message'>
							<h2>
								<span>Create account</span>
							</h2>
						</section>
						<p>Register a new administrative account. </p>
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
										placeholder='Type your age here.'
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
										type='password'
										name='confirm_password'
										placeholder='Confirm your password.'
										onChange={(e) => handleChange(e)}
									/>
								</div>
							</section>

							<span className='errorMessage'>{errorMessage}</span>

							<section className='actions'>
								<button className='next' type='submit'>
									<BiLogInCircle />
									<span>Next</span>
								</button>
								<button className='login' onClick={() => navigate('/login')}>
									<FaUnlockAlt />
									<span>Login</span>
								</button>
							</section>
						</form>
					</div>
				</article>
			</main>
			<footer>
				<div>
					Copyright &copy; 2022 <i>Marketeer Systems</i>
				</div>
				<div>All Rights Reserved.</div>
			</footer>
		</Container>
	);
}
