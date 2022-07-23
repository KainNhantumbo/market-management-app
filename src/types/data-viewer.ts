interface DataProps {
	title: string;
	details: string;
}

export interface Props {
	quit: () => void;
	active: boolean;
	data: DataProps[];
}

export type DataViewerInterface = DataProps[];
