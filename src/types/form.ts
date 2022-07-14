import { ChangeEvent } from "react";

export type Inputs =
	| ChangeEvent<HTMLInputElement>
	| React.ChangeEvent<HTMLSelectElement>
	| ChangeEvent<HTMLTextAreaElement>;