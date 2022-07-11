import styled from 'styled-components';

export const SubscriptorsContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	padding: 75px 0 20px 160px;
	display: flex;
	justify-content: space-between;
	gap: 10px;

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
		align-self: flex-end;

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

	main {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		gap: 20px;

		.messages-container {
			width: 100%;
			max-width: 700px;
			display: flex;
			gap: 20px;
			justify-content: flex-start;
			flex-direction: column;
			@media screen and (max-width: 340px) {
				padding: 40px 15px;
			}

			.icon {
				position: absolute;
				top: 10px;
				left: 9px;
				width: 18px;
				height: 18px;
				color: rgb(${({ theme }) => theme.alterAlt});
			}
			.messages-notice {
				display: grid;
				width: 100%;
				height: 70vh;
				place-content: center;
				place-items: center;
				font-size: 1.2rem;
				font-weight: 500;
				gap: 10px;
				user-select: none;
				svg {
					color: rgb(${({ theme }) => theme.font});
					width: 80px;
					height: 80px;
				}
			}
			.message {
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				height: 80px;
				line-height: 1.4rem;
				gap: 15px;
				border-radius: 10px;
				justify-content: flex-end;
				position: relative;
				padding: 10px;
				margin: 0 10px;
				background-color: rgb(${({ theme }) => theme.backgroundAlt});
				box-shadow: 0 0 2px rgba(${({ theme }) => theme.shadows}, 0.9);

				:hover {
					box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
					transition: all 200ms ease;
				}
				p {
					font-size: 1.2rem;
					font-weight: 500;
					position: absolute;
					top: 40px;
				}

				.date {
					position: absolute;
					right: 10px;
					top: 10px;
					font-weight: 500;
					font-size: 0.9rem;
				}
			}
		}
	}
`;
