import styled from 'styled-components';
import { BaseButton, ButtonA } from './global/buttons';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;

	header {
		text-align: center;
		font-weight: 500;
		position: relative;
		.auth {
			position: fixed;
			right: 10px;
			top: 10px;
			button {
				${ButtonA}
			}
		}
		h1 {
			color: rgb(${({ theme }) => theme.primary});
			text-transform: uppercase;
			font-weight: 700;
		}
	}

	.actions-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 20px;
		width: 100%;
		margin: 0 10px;

		.action {
			width: 100vw;
			max-width: 500px;
			display: flex;
			gap: 20px;
			justify-content: space-between;
			align-items: center;
			background: rgb(${({ theme }) => theme.backgroundAlt});
			border-radius: 3px;
			padding: 30px 50px;
			position: relative;
			border: 1px solid rgba(${({ theme }) => theme.shadows}, 0.5);

			:hover {
				box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
			}

			.icon {
				width: 20px;
				height: 20px;
				position: absolute;
				top: calc(50% - 10px);
				left: 20px;
				pointer-events: none;
				color: rgb(${({ theme }) => theme.alterAlt});
			}

			@media screen and (max-width: 340px) {
				padding: 40px 15px;
			}

			button {
				${BaseButton}
			}
		}
	}
`;
