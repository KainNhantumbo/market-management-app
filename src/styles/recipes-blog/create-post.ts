import styled from 'styled-components';

export const CreatePostContainer = styled.div`
	width: 100vw;
	min-height: 100vh;
	position: relative;
	padding: 75px 0 30px 160px;
	display: flex;
	justify-content: space-between;
	gap: 10px;

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

	main {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		gap: 20px;

		.form-container {
			width: 100vw;
			max-width: 600px;
			display: flex;
			gap: 20px;
			justify-content: flex-start;
			flex-direction: column;
			background: rgb(${({ theme }) => theme.backgroundAlt});
			box-shadow: 0 0 2px rgba(${({ theme }) => theme.shadows}, 0.9);
			border-radius: 10px;
			padding: 20px;

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

				input,
				textarea,
				select {
					border: none;
					padding: 8px 10px;
					line-height: 1.2rem;
					font-weight: 500;
					outline: none;
					border-radius: 15px;
					resize: none;

					::placeholder {
						color: rgba(${({ theme }) => theme.font}, 0.5);
						font-size: 0.9rem;
					}
				}

				input[type='file'] {
					width: 0px;
					height: 0.1px;
					visibility: hidden;
				}

				.file-label {
					padding: 5px 10px;
					line-height: 1.2rem;
					font-weight: 500;
					cursor: pointer;
					border-radius: 15px;
					color: rgb(${({ theme }) => theme.text});
					background: rgb(${({ theme }) => theme.alter});
					:hover {
						background: rgb(${({ theme }) => theme.secondary});
						transition: all 200ms ease;
					}
					svg {
						left: 10px;
						top: 5px;
						color: rgb(${({ theme }) => theme.text});
					}
				}

				.actions {
					display: flex;
					justify-content: flex-start;
					gap: 20px;
					flex-direction: row;
				}
			}
		}
	}
`;
