import { ChangeEvent, FormEvent } from 'react';

export type Inputs =
	| ChangeEvent<HTMLInputElement>
	| ChangeEvent<HTMLSelectElement>
	| ChangeEvent<HTMLTextAreaElement>;

export type FormSubmit = FormEvent<HTMLFormElement>;
