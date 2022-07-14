import { css } from 'styled-components';

export const InitialStyles = css`
	width: 100vw;
	min-height: 100vh;
	position: relative;
	padding: 75px 0 30px 160px;
	display: flex;
	justify-content: space-between;
	gap: 10px;

	@media screen and (max-width: 460px) {
		padding: 75px 0 30px 70px;
	}
`;
