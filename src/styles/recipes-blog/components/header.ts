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
	box-shadow: 0 0 12px rgba(${({ theme }) => theme.shadows}, 0.6);
	z-index: 5000;
	border-radius: 0 0 20px 20px;

	.brand {
		position: relative;
		color: rgb(${({ theme }) => theme.primary});
		cursor: pointer;
		
		span {
			font-weight: 600;
			text-align: center;
			font-size: 1.4rem;
		}
		svg {
			position: absolute;
			width: 18px;
			height: 18px;
			color: rgb(${({ theme }) => theme.alter});
			right: -20px;
			top: -1px;
		}
	}
	p {
		font-weight: 500;
		user-select: none;
	}
`;
