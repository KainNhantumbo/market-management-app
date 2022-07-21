import { css } from 'styled-components';

export const StyledLabels = css`
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
`;

export const StyledInputs = css`
	input,
	textarea,
	select {
		width: 100%;
		border: none;
		padding: 5px 10px;
		line-height: 1.2rem;
		font-weight: 500;
		outline: none;
		border-radius: 3px;
		background: rgb(${({ theme }) => theme.inner});
		border: 1px solid rgba(${({ theme }) => theme.font}, 0.5);
		::placeholder {
			color: rgba(${({ theme }) => theme.font}, 0.7);
			font-size: 0.9rem;
		}
		:disabled {
			background: none;
			border: 1px solid rgba(${({ theme }) => theme.font}, 0.1);
			::placeholder {
				color: transparent;
			}
		}
	}
	textarea {
		resize: none;
	}
	select {
		max-height: 32px;
	}
`;

export const FormDivisions = css`
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
			}
		}
	}
`;
