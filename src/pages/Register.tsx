import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RegisterContainer as Container } from '../styles/register';
import { FaArrowRight, FaLock, FaUser, FaUserLock } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';

interface UserData {
	username: string;
	password: string;
}

export default function Register() {
	const [formData, setFormData] = useState<UserData>({
		username: '',
		password: '',
	});
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		try {
			const { data: user } = await axios({});
			localStorage.setItem('uminoToken', JSON.stringify({ token: user.token }));
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
			<header className='upper-container'>
				<section className='logo'>
					<h1>
						<span>Marketeer</span>
					</h1>
				</section>
				<section className='slogan'>
					<h2>
						<span>Market Management System</span>
					</h2>
				</section>
			</header>
			<main>
				<article>
					<div className='form-container'>
						<section className='message'>
							<h2>
								<span>Register</span>
							</h2>
						</section>
						<p>Register a new administrative account. </p>
						<form onSubmit={handleSubmit}>
							<label htmlFor='username'>
								<FaUser />
								<span>Username</span>
							</label>
							<input
								type='username'
								placeholder='Type your username here.'
								name='username'
								required
								onChange={(e) => handleChange(e)}
							/>
							<label htmlFor='password'>
								<FaLock />
								<span>Password</span>
							</label>
							<input
								type='password'
								name='password'
								placeholder='Type your password here.'
								onChange={(e) => handleChange(e)}
							/>
							<span className='errorMessage'>{errorMessage}</span>
							<section className='actions'>
								<button className='next' type='submit'>
									<BiLogInCircle />
									<span>Next</span>
								</button>

								<button className='login' onClick={() => navigate('/register')}>
									<FaUserLock />
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
