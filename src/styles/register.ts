import styled from 'styled-components';
import { BaseButton, ButtonA } from './global/buttons';
import { StyledInputs, StyledLabels } from './global/form';

export const RegisterContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 40px;

	header {
		width: 100%;
		padding: 15px;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		gap: 10px;
		background: rgb(${({ theme }) => theme.backgroundAlt});
		font-weight: 600;
		margin: 0;
		h1 {
			position: relative;
			color: rgb(${({ theme }) => theme.primary});
			line-height: 1.2rem;
			text-transform: uppercase;
			font-weight: 700;
		}
		h2 {
			font-size: 1rem;
			color: rgb(${({ theme }) => theme.font});
			text-transform: uppercase;
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
			background: rgb(${({ theme }) => theme.backgroundAlt});
			border-radius: 3px;
			border: 1px solid rgba(${({ theme }) => theme.shadows}, 0.5);
			padding: 40px 30px;

			@media screen and (max-width: 340px) {
				padding: 40px 15px;
			}

			.message {
				line-height: 1.4rem;
				font-weight: 600;
				font-size: 1.2rem;
				color: rgb(${({ theme }) => theme.alter});
			}

			p {
				font-weight: 500;
				line-height: 1.4rem;
			}

			form {
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				gap: 15px;

				.form-section {
					display: flex;
					flex-direction: row;
					width: 100%;
					gap: 10px;

					@media screen and (max-width: 655px) {
						flex-direction: column;
					}
					.form-element {
						display: flex;
						flex-direction: column;
						width: 100%;
						gap: 5px;
					}
				}
				label {
					${StyledLabels}
				}

				${StyledInputs}

				.errorMessage {
					color: rgb(${({ theme }) => theme.alter});
					font-weight: 500;
					font-size: 0.9rem;
				}

				.actions {
					display: flex;
					flex-flow: row wrap;
					justify-content: flex-start;
					gap: 10px;

					.next {
						${BaseButton}
					}
					.login {
						${ButtonA}
					}
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
		margin-bottom: 20px;

		i {
			color: rgb(${({ theme }) => theme.primary});
		}
	}
`;
