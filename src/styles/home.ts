import styled from 'styled-components';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;

	header {
		text-align: center;
		font-weight: 500;

		h1 {
			color: rgb(${({ theme }) => theme.primary});
		}
	}

	.actions-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: 20px;
		width: 100%;

		.action {
			width: 100vw;
			max-width: 500px;
			display: flex;
			gap: 20px;
			justify-content: space-between;
			align-items: center;
			background: rgb(${({ theme }) => theme.backgroundAlt});
			box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
			border-radius: 10px;
			padding: 30px 50px;
			position: relative;

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
				border: none;
				background: none;
				border-radius: 3px;
				position: relative;
				padding: 7px 10px;
				color: rgb(${({ theme }) => theme.font});
				border-bottom: 1px solid rgba(${({ theme }) => theme.font}, 0.5);
				width: fit-content;
				cursor: pointer;

				:hover {
					color: rgb(${({ theme }) => theme.alter});
					transition: all 200ms ease-in-out;
				}

				svg {
					width: 18px;
					height: 18px;
					position: absolute;
					top: 7px;
					right: 7px;
					pointer-events: none;
				}
				span {
					padding-right: 20px;
					font-weight: 500;
					pointer-events: none;
				}
			}
		}
	}
`;
