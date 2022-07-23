import { css } from 'styled-components';

export const BaseButton = css`
	border: none;
	background: none;
	border-radius: 3px;
	position: relative;
	padding: 7px 10px;
	color: rgb(${({ theme }) => theme.font});
	border: 1px solid rgba(${({ theme }) => theme.font}, 0.5);
	width: fit-content;
	cursor: pointer;
	:hover {
		color: rgb(${({ theme }) => theme.alterAlt});
		transition: all 200ms ease-in-out;
	}
	svg {
		width: 18px;
		height: 18px;
		position: absolute;
		top: 7px;
		right: 7px;
		pointer-events: none;
	}
	span {
		padding-right: 20px;
		font-weight: 500;
		pointer-events: none;
	}
`;

export const ButtonA = css`
	border: none;
	background: rgb(${({ theme }) => theme.primary});
	border-radius: 3px;
	position: relative;
	padding: 7px 10px;
	color: rgb(${({ theme }) => theme.text});
	width: fit-content;
	cursor: pointer;
	:hover {
		color: rgb(${({ theme }) => theme.text});
		transition: all 200ms ease-in-out;
		background: rgb(${({ theme }) => theme.secondary});
	}
	svg {
		width: 18px;
		height: 18px;
		position: absolute;
		top: 7px;
		right: 7px;
		pointer-events: none;
	}
	span {
		padding-right: 20px;
		font-weight: 500;
		pointer-events: none;
	}
`;

export const ButtonDanger = css`
	border: none;
	background: rgb(${({ theme }) => theme.alter});
	border-radius: 3px;
	position: relative;
	padding: 7px 10px;
	color: rgb(${({ theme }) => theme.text});
	width: fit-content;
	cursor: pointer;
	:hover {
		color: rgb(${({ theme }) => theme.text});
		transition: all 200ms ease-in-out;
		background: rgb(${({ theme }) => theme.secondary});
	}
	svg {
		width: 18px;
		height: 18px;
		position: absolute;
		top: 7px;
		right: 7px;
		pointer-events: none;
	}
	span {
		padding-right: 20px;
		font-weight: 500;
		pointer-events: none;
	}
`;

export const ButtonB = css`
	border: none;
	background: rgb(${({ theme }) => theme.primary});
	border-radius: 3px;
	position: relative;
	padding: 7px 10px;
	color: rgb(${({ theme }) => theme.text});
	width: fit-content;
	cursor: pointer;
	display: grid;
	place-content: center;

	:hover {
		transition: all 200ms ease-in-out;
		background: rgb(${({ theme }) => theme.secondary});
	}
	svg {
		pointer-events: none;
	}
`;

export const ButtonC = css`
	border: none;
	border: 1px solid rgba(${({ theme }) => theme.font}, 0.5);
	background: none;
	border-radius: 3px;
	position: relative;
	padding: 5px;
	color: rgb(${({ theme }) => theme.primary});
	width: fit-content;
	cursor: pointer;
	display: grid;
	place-content: center;

	:hover {
		transition: all 200ms ease-in-out;
		background: rgb(${({ theme }) => theme.secondary});
		svg {
			color: rgb(${({ theme }) => theme.text});
		}
	}
	svg {
		pointer-events: none;
	}
`;

export const StyledCornerButton = css`
	border-radius: 3px;
	background: rgb(${({ theme }) => theme.inner});
	color: rgb(${({ theme }) => theme.primary});
	border: none;
	width: fit-content;
	cursor: pointer;
	display: grid;
	place-content: center;
	padding: 5px;

	:hover {
		background: rgb(${({ theme }) => theme.secondary});
		svg {
			color: rgb(${({ theme }) => theme.text});
		}
	}
	svg {
		pointer-events: none;
	}
`;
