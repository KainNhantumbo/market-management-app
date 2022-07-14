import styled from 'styled-components';

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 20px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 5px;
	background: rgb(${({ theme }) => theme.backgroundAlt});
	border-bottom: 1px solid rgba(${({ theme }) => theme.shadows}, 0.5);
	z-index: 5000;

	.brand {
		position: relative;
		color: rgb(${({ theme }) => theme.primary});
		cursor: pointer;

		span {
			font-weight: 600;
			text-align: center;
			font-size: 1.4rem;
		}
	}
	p {
		font-weight: 500;
		user-select: none;
	}

	button {
		border: none;
		background: none;
		border-radius: 5px;
		padding: 3px;
		position: absolute;
		top: 20px;
		left: 180px;
		color: rgb(${({ theme }) => theme.alterAlt});
		cursor: pointer;
		display: grid;
		place-content: center;
		border: 1px solid rgba(${({ theme }) => theme.shadows}, 0.5);
		svg {
			width: 20px;
			height: 20px;
		}
	}
`;
