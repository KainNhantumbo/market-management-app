import styled from 'styled-components';
import { BaseButton, ButtonA } from './global/buttons';

export const DashboardContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	margin-left: ;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 40px;

	header {
		width: 100%;
		padding: 15px;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		gap: 10px;
		background: rgb(${({ theme }) => theme.backgroundAlt});
		font-weight: 600;
		margin: 0;
		h1 {
			position: relative;
			color: rgb(${({ theme }) => theme.primary});
			line-height: 1.2rem;
		}
		h2 {
			font-size: 1.2rem;
			color: rgb(${({ theme }) => theme.font});
		}
	}

`;
