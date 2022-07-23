interface DataProps {
	title: string;
	details: string;
}

export interface Props {
	quit: () => void;
	active: boolean;
	data: DataProps[];
	title: string
	icon: JSX.Element
}

export type DataViewerInterface = DataProps[];
