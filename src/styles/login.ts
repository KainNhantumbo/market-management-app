import styled from 'styled-components';

export const LoginContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 50px;

	header {
		width: 100%;
		padding: 10px 20px;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		gap: 5px;
		background: rgb(${({ theme }) => theme.backgroundAlt});
		box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
		border-bottom: 3px solid rgb(${({ theme }) => theme.alter});
		border-radius: 0 0 20px 20px;
		h1 {
			position: relative;
			span {
				font-weight: 600;
				text-align: center;
				color: rgb(${({ theme }) => theme.primary});
			}
			svg {
				position: absolute;
				width: 25px;
				height: 25px;
				color: rgb(${({ theme }) => theme.alter});
				right: -30px;
				top: 3px;
			}
		}

		h2 {
			font-weight: 600;
			font-size: 1.2rem;
			color: rgb(${({ theme }) => theme.font});
		}
	}

	article {
		width: 100%;
		@media screen and (max-width: 340px) {
			padding: 40px 15px;
		}

		.form-container {
			width: 100%;
			max-width: 700px;
			display: flex;
			gap: 20px;
			justify-content: flex-start;
			flex-direction: column;
			box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
			border-bottom: 3px solid rgb(${({ theme }) => theme.alter});
			background: rgb(${({ theme }) => theme.backgroundAlt});
			border-radius: 10px;
			padding: 40px;

			@media screen and (max-width: 340px) {
				padding: 40px 15px;
			}

			.message {
				line-height: 1.4rem;
				font-weight: 500;
				font-size: 1.2rem;
				border-left: 3px solid rgb(${({ theme }) => theme.alter});
				padding-left: 5px;
			}

			p {
				font-weight: 500;
			}

			form {
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				gap: 15px;

				label {
					font-weight: 500;
					display: inline;
					position: relative;
					line-height: 1.4rem;

					svg {
						width: 16px;
						height: 16px;
						position: absolute;
						top: 2px;
						left: 0;
						color: rgb(${({ theme }) => theme.alterAlt});
					}
					span {
						padding-left: 25px;
						font-weight: 500;
					}
				}

				button {
					border: none;
					background: none;
					border-radius: 15px;
					position: relative;
					padding: 7px 10px;
					color: rgb(${({ theme }) => theme.text});
					background: rgb(${({ theme }) => theme.alter});
					width: fit-content;
					cursor: pointer;

					:hover {
						box-shadow: 0 0 12px rgb(${({ theme }) => theme.shadows});
						background: rgb(${({ theme }) => theme.secondary});

						transition: all 200ms ease-in-out;
					}

					svg {
						width: 18px;
						height: 18px;
						position: absolute;
						top: 7px;
						left: 7px;
						pointer-events: none;
					}
					span {
						padding-left: 20px;
						font-weight: 500;
						pointer-events: none;
					}
				}

				input {
					border: none;
					padding: 5px 10px;
					line-height: 1.2rem;
					font-weight: 500;
					outline: none;
					border-radius: 15px;
					border: 1px solid transparent;

					::placeholder {
						color: rgba(${({ theme }) => theme.font}, 0.5);
						font-size: 0.9rem;
					}
				}

				.errorMessage {
					color:  rgb(${({ theme }) => theme.alter});
					font-weight: 500;
					font-size: 0.9rem;
				}

				.actions {
					display: flex;
					flex-flow: row wrap;
					justify-content: flex-start;
					gap: 10px;
				}
			}
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-weight: 500;

		i {
			color: rgb(${({ theme }) => theme.primary});
		}
	}
`;
