import styled from 'styled-components';
import { BaseButton, ButtonA } from '../global/buttons';
import { StyledLabels } from '../global/form';

export const Viewer = styled.article`
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
	position: fixed;

	.error-message {
		color: rgb(${({ theme }) => theme.alter});
		font-size: 0.9rem;
		font-weight: 500;
	}

	.dialog-prompt {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		gap: 10px;
		padding: 20px;
		border-radius: 3px;
		border: 1px solid rgba(${({ theme }) => theme.shadows}, 0.5);
		background: rgb(${({ theme }) => theme.backgroundAlt});
		width: 100%;
		min-width: 300px;
		min-height: 200px;
		max-width: 600px;
		margin: 0 10px;

		@media screen and (max-width: 450px) {
			width: 300px;
		}

		.prompt-info {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: 10px;
			span {
				font-weight: 500;
				color: rgb(${({ theme }) => theme.primary});
			}
			p {
				line-height: 1.6rem;
				font-size: 0.9rem;
        text-overflow: ellipsis;
        overflow: hidden;
			}
		}

		.prompt-actions {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			gap: 10px;

			.prompt-cancel {
				${BaseButton}
			}
		}
	}
`;
