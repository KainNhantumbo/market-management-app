import styled from 'styled-components';
import { BaseButton, ButtonA, ButtonDanger } from './global/buttons';
import { StyledInputs, StyledLabels } from './global/form';
import { InitialStyles } from './global/page';

export const ProfileContainer = styled.div`
	${InitialStyles}

	main {
		display: flex;
		flex-direction: column;
		gap: 20px;
    align-items: center;
    width: 100vw;

		.upper-container {
			font-size: 1.2rem;
			line-height: 1.6rem;
			font-weight: 500;
      align-self: flex-start;

			p {
				font-size: .9rem;
			}
		}

		article {
			width: 100%;
			max-width: 900px;
			display: flex;
			gap: 20px;
			flex-direction: column;
			background: rgb(${({ theme }) => theme.backgroundAlt});
			border-radius: 3px;
			border: 1px solid rgba(${({ theme }) => theme.shadows}, 0.5);
			padding: 20px;
      margin-right: 10px;


			@media screen and (max-width: 340px) {
				padding: 40px 15px;
			}

			h4 {
				
			}

			form {
				display: flex;
				flex-direction: column;
				gap: 15px;

				.form-section {
					display: flex;
					flex-direction: row;
					width: 100%;
					gap: 10px;

					@media screen and (max-width: 655px) {
						flex-direction: column;
					}
					.form-element {
						display: flex;
						flex-direction: column;
						width: 100%;
						gap: 5px;
					}
				}

				label {
					${StyledLabels}
				}

				${StyledInputs}
				.errorMessage {
					color: rgb(${({ theme }) => theme.alter});
					font-weight: 500;
					font-size: 0.9rem;
				}

				.actions {
					display: flex;
					flex-flow: row wrap;
					justify-content: flex-start;
					gap: 10px;

					.next {
						${BaseButton}
					}
					.login {
						${ButtonA}
					}
					.delete {
						${ButtonDanger}
					}
				}
			}
		}
	}
`;
