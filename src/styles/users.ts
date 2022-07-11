import styled from 'styled-components';

export const UsersContainer = styled.div`
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
			box-shadow: 0 0 2px rgba(${({ theme }) => theme.shadows}, 0.9);
			border-radius: 10px;
			padding: 20px 40px;
			position: relative;

			:hover {
				box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
				transition: all 200ms ease;
			}

			.icon {
				width: 20px;
				height: 20px;
				position: absolute;
				top: calc(50% - 10px);
				left: 20px;
				pointer-events: none;
			}

			@media screen and (max-width: 340px) {
				padding: 40px 15px;
			}

			div {
				display: flex;
				flex-direction: column;
				gap: 8px;
				user-select: none;
				font-weight: 500;

				h3 {
					font-weight: 500;
					display: inline;
					position: relative;
					line-height: 1.4rem;

					svg {
						width: 18px;
						height: 18px;
						position: absolute;
						top: 2px;
						left: -25px;
						color: rgb(${({ theme }) => theme.alterAlt});
					}
					span {
						font-weight: 500;
					}
				}
			}

			button {
				border: none;
				background: none;
				border-radius: 15px;
				position: relative;
				padding: 5px 10px;
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
					width: 22px;
					height: 22px;
					position: absolute;
					top: 3px;
					left: 7px;
					pointer-events: none;
				}
				span {
					padding-left: 20px;
					font-weight: 500;
					font-size: 0.9rem;
					pointer-events: none;
				}
			}
		}
	}
`;
