import { LoginContainer as Container } from '../styles/login';
import { FC, useState } from 'react';
import { FaLock, FaUser, BiLogIn } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';
import { FormSubmit, Inputs } from '../types/form';
import { fetchAPI, getToken } from '../utils/fetchdata';

interface UserData {
	user_name: string;
	password: string;
}

const Login: FC = (): JSX.Element => {
	const [formData, setFormData] = useState<UserData>({
		user_name: '',
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
			const { data: user } = await fetchAPI({
				method: 'post',
				url: '/auth/login',
				data: formData,
			});
			localStorage.setItem(
				'accessToken',
				JSON.stringify({ token: user.token })
			);
			navigate('/admin/dashboard');
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
								<span>Welcome back!</span>
							</h2>
						</section>
						<p>Login to your account to continue. </p>
						<form onSubmit={handleSubmit}>
							<label htmlFor='username'>
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
								<button className='login' type='submit'>
									<BiLogIn />
									<span>Login</span>
								</button>
								<button
									className='register'
									onClick={() => navigate('/create-account')}
								>
									<BiLogIn />
									<span>Create Account</span>
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
};

export default Login;
