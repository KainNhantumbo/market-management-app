import styled from 'styled-components';

export const DashboardContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;

	main {
		padding: 85px 0 0 175px;
		display: flex;
		flex-direction: column-reverse;
		justify-content: space-between;
		align-items: center;
		gap: 30px;

		@media screen and (max-width: 460px) {
			padding-left: 65px;
		}

		.cards-container {
			width: 100%;
			max-width: 550px;
			box-shadow: 0 0 2px rgba(${({ theme }) => theme.shadows}, 1);
			border-radius: 10px;
			padding: 15px;
			position: relative;
			background: rgb(${({ theme }) => theme.backgroundAlt});
			@media screen and (max-width: 740px) {
				margin-right: 10px;
			}
			h2 {
				position: absolute;
				top: 15px;
				font-size: 1.2rem;
				font-weight: 500;
				color: rgb(${({ theme }) => theme.font});
				span {
					padding-left: 20px;
				}
				svg {
					width: 20px;
					height: 20px;
					position: absolute;
					top: -2px;
					left: -2px;
					pointer-events: none;
					color: rgb(${({ theme }) => theme.alterAlt});
				}
			}

			@media screen and (max-width: 340px) {
				padding: 40px 15px;
			}

			.cards {
				margin-top: 40px;
				display: flex;
				width: 100%;
				flex-direction: column;
				justify-content: flex-start;
				gap: 15px;
				.card {
					display: flex;
					justify-content: space-between;
					gap: 10px;
					font-weight: 500;

					h3 {
						position: relative;
						top: 10px;
						font-weight: 500;
						line-height: 0;
						text-overflow: ellipsis;
						white-space: nowrap;

						span {
							padding-left: 25px;
						}
						svg {
							width: 20px;
							height: 20px;
							position: absolute;
							top: -10px;
							left: -2px;
							pointer-events: none;
							color: rgb(${({ theme }) => theme.alterAlt});
						}
					}
				}
			}
		}

		.actions-container {
			display: flex;
			justify-content: flex-start;
			flex-flow: row wrap;
			gap: 20px;

			.action-runner {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 10px;
				font-weight: 500;
				border-radius: 10px;
				width: 170px;
				padding: 12px;
				position: relative;
				background: rgb(${({ theme }) => theme.backgroundAlt});
				box-shadow: 0 0 2px rgba(${({ theme }) => theme.shadows}, 0.9);
				cursor: pointer;

				:hover {
					box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
					color: rgb(${({ theme }) => theme.alter});
					transition: all 200ms ease;
					svg {
						color: rgb(${({ theme }) => theme.alter});
					}
				}

				svg {
					color: rgb(${({ theme }) => theme.alterAlt});
					width: 25px;
					height: 25px;
				}
			}
		}
	}
`;
