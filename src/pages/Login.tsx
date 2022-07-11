import { LoginContainer as Container } from '../styles/login';
import { FC, useState } from 'react';
import type { ChangeEvent } from 'react';
import { BiLogIn } from 'react-icons/bi';
import { FaEnvelope, FaLock, FaPlus } from 'react-icons/fa';
import fetchData from '../context/CustomFetch';
import { useNavigate } from 'react-router-dom';

interface UserData {
	email: string;
	password: string;
}

const Login: FC = (): JSX.Element => {
	const [formData, setFormData] = useState<UserData>({
		email: '',
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
			const { data: user } = await fetchData({
				method: 'post',
				data: formData,
				url: '/auth/login',
			});
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
						<FaPlus />
						<span>Umino</span>
					</h1>
				</section>
				<section className='slogan'>
					<h2>
						<span>Gerenciamento de Dados</span>
					</h2>
				</section>
			</header>
			<main>
				<article>
					<div className='form-container'>
						<section className='message'>
							<h2>
								<span>Bem-vindo de volta Administrador!</span>
							</h2>
						</section>
						<p>Faça login para continuar. </p>
						<form onSubmit={handleSubmit}>
							<label htmlFor='email'>
								<FaEnvelope />
								<span>E-mail</span>
							</label>
							<input
								type='email'
								placeholder='Escreva o seu e-mail'
								name='email'
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
								placeholder='Escreva a sua senha'
								onChange={(e) => handleChange(e)}
							/>
							<span className='errorMessage'>{errorMessage}</span>
							<section className='ections'>
								<button type='submit'>
									<BiLogIn />
									<span>Login</span>
								</button>
							</section>
						</form>
					</div>
				</article>
			</main>
			<footer>
				<div>
					Copyright &copy; 2022 <i>Umino+</i>
				</div>
				<div>Todos os Direitos Reservados.</div>
			</footer>
		</Container>
	);
};

export default Login;
