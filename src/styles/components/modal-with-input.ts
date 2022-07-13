import styled from 'styled-components';

export const ModalWithInput = styled.article`
	button {
		border: none;
		background: none;
		border-radius: 3px;
		position: relative;
		padding: 7px 10px;
		color: rgb(${({ theme }) => theme.text});
		background: rgb(${({ theme }) => theme.primary});
		width: fit-content;
		cursor: pointer;

		:hover {
			box-shadow: 0 0 12px rgb(${({ theme }) => theme.shadows});
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

	input[type='text'] {
		border: none;
		padding: 5px;
		line-height: 1.2rem;
		width: 300px;
		font-weight: 500;
		outline: none;
		border-radius: 3px;
		border: 1px solid transparent;

		::placeholder {
			color: rgba(${({ theme }) => theme.font}, 0.5);
			font-size: 0.9rem;
		}
		:focus {
			border: 1px solid rgb(${({ theme }) => theme.primary});
			box-shadow: 0 0 10px rgba(${({ theme }) => theme.primary}, 0.5);
		}
	}

	position: fixed;
	width: 100vw;
	height: 100vh;
	background: rgba(${({ theme }) => theme.background}, 0.2);
	backdrop-filter: blur(5px);
	z-index: 10000;
	top: 0;
	left: 0;
	display: grid;
	place-content: center;
	user-select: none;

	.error-message {
		color: red;
		font-weight: 500;
	}

	.dialog-prompt {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 20px;
		padding: 20px;
		border-radius: 10px;
		background: rgb(${({ theme }) => theme.backgroundAlt});
		box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
		max-width: 600px;
		margin: 0 10px;
		border-bottom: 2px solid rgb(${({ theme }) => theme.primary});

		.prompt-info {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: 20px;
			position: relative;
			svg {
				position: absolute;
				top: -3px;
				left: 0;
				width: 20px;
				height: 20px;
				color: rgb(${({ theme }) => theme.primary});
			}
			span {
				padding-left: 25px;
				font-weight: 500;
				color: rgb(${({ theme }) => theme.primary});
			}
			p {
				line-height: 1.6rem;
				font-size: 0.9rem;
			}
		}

		.prompt-actions {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			gap: 10px;
		}
	}
`;
