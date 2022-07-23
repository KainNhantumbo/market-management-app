import { ChangeEvent, FormEvent, MouseEvent } from 'react';

export type Inputs =
	| ChangeEvent<HTMLInputElement>
	| ChangeEvent<HTMLSelectElement>
	| ChangeEvent<HTMLTextAreaElement>;

export type FormSubmit = FormEvent<HTMLFormElement>;

export type ClickEvents = React.MouseEvent<HTMLElement, MouseEvent> ;
