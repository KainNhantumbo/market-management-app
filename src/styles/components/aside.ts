import styled from 'styled-components';

export const AsideContainer = styled.aside`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	background: rgb(${({ theme }) => theme.backgroundAlt});
	box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
	height: 100vh;

	nav {
		margin-top: 80px;

		ul {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			gap: 10px;
			font-weight: 500;
			padding: 0 10px;
			@media screen and (max-width: 460px) {
				width: 55px;
				gap: 30px;
			}

			li {
				position: relative;
				padding: 10px;

				:hover {
					color: rgb(${({ theme }) => theme.alter});
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
					top: 8px;
					left: 5px;
					width: 22px;
					height: 22px;
				}
			}
		}
	}
`;
