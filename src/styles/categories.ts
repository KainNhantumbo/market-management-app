import styled from 'styled-components';
import { ButtonA, BaseButton , ButtonB} from './global/buttons';

export const CategoriesContainer = styled.div`
	width: 100vw;
	min-height: 100vh;
	position: relative;
	padding: 75px 0 30px 160px;
	display: flex;
	justify-content: space-between;
	gap: 10px;

	.upper-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 20px;

		.title-tools {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 10px;
			h2 {
				font-size: 1.2rem;
				line-height: 1.6rem;
				font-weight: 500;
			}
			.search {
				display: flex;
				flex-direction: row;
				gap: 10px;
				justify-content: flex-start;
input {

}
				button {
					${ButtonB}
				}
			}
		}
	}
`;
