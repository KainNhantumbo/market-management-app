import styled from 'styled-components';
import { ButtonA, ButtonB, ButtonC } from './global/buttons';
import { StyledInputs, StyledLabels } from './global/form';
import { InitialStyles } from './global/page';

export const CategoriesContainer = styled.div`
	${InitialStyles}

	main {
		display: flex;
		flex-direction: column;
		gap: 20px;

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
				padding-bottom: 10px;
				${StyledInputs}
				width: fit-content;

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

					button {
						${ButtonB}
					}
				}
			}

			form {
				display: flex;
				flex-direction: column;
				gap: 5px;
				width: fit-content;

				section {
					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					gap: 10px;
				}
				button {
					${ButtonA}
				}
				label {
					${StyledLabels}
				}
				${StyledInputs}
			}
		}

		article {
			margin-right: 10px;
			.description-bar {
				padding: 15px 10px;
				border-top: 1px solid rgba(${({ theme }) => theme.font}, 0.5);
				display: flex;
				justify-content: space-between;
				gap: 10px;
				font-weight: 500;

				.description-titles {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: 8px;

					.name {
						width: 300px;
					}
				}

				.description-actions {
					padding-right: 10px;
				}
			}
			.category-container {
				display: flex;
				flex-direction: column;
				gap: 5px;
				width: 100vw;
				justify-content: center;
				margin-right: 20px;
			}

			.category {
				display: flex;
				width: 100%;
				justify-content: space-between;
				padding: 5px 10px;
				background: rgb(${({ theme }) => theme.backgroundAlt});
				border: 1px solid rgba(${({ theme }) => theme.font}, 0.2);
				align-items: center;
				border-radius: 3px;
				gap: 10px;

				.data {
					display: grid;
					grid-template-columns: 300px 1fr;
					gap: 8px;
					text-align: start;

					.name,
					.description {
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						padding: 12px 0;
					}

					.name {
						width: 300px;
						max-width: 300px;
					}
				}
				.actions {
					display: flex;
					flex-direction: row;
					gap: 5px;
					button {
						${ButtonC}
						width: 32px;
						height: 32px;
					}
				}
			}
		}
	}
`;
