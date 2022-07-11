import styled from 'styled-components';

export const ToolbarContainer = styled.section`
	width: 100%;
	max-width: 1000px;
	padding: 0 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid rgba(${({ theme }) => theme.inner}, 0.9);

	div {
		background: rgb(${({ theme }) => theme.inner});
		padding: 5px 8px;
		border-radius: 12px;
		font-weight: 500;
		display: flex;
		gap: 5px;
		align-items: center;
		cursor: pointer;

		:hover {
			color: rgb(${({ theme }) => theme.alter});
			transition: all 200ms ease;
		}
	}
`;
