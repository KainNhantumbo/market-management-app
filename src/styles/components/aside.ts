import styled from 'styled-components';

export const AsideContainer = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	background: rgb(${({ theme }) => theme.hover});
	box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
	height: 100vh;

	nav {
		margin-top: 70px;

		ul {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: 10px;
			font-weight: 500;
			padding: 0 10px;
			@media screen and (max-width: 460px) {
				width: 60px;
			}

			.active {
				border-left: 3px solid rgb(${({ theme }) => theme.alterAlt});
				background: rgb(${({ theme }) => theme.backgroundAlt});
			}

			.inative {
				border-left: 3px solid transparent;
			}

			li {
				position: relative;
				padding: 10px;
				color: rgb(${({ theme }) => theme.font});
				border-radius: 3px;
				height: 40px;
				display: grid;
				align-items: center;

				:hover {
					color: rgb(${({ theme }) => theme.alterAlt});
					cursor: pointer;
				}

				span {
					padding-left: 25px;
					@media screen and (max-width: 460px) {
						display: none;
					}
				}
				svg {
					position: absolute;
					top: 9px;
					left: 6px;
					width: 22px;
					height: 22px;
				}
			}
		}
	}
`;
