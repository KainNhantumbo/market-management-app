interface Timestamps {
	createdAt: string;
	updatedAt: string;
}

interface Content {
	title: string;
	details: string;
}
interface DataProps {
	content: Content[];
	timestamps: Timestamps;
}

export interface Props {
	quit: () => void;
	active: boolean;
	data: DataProps;
	title: string;
	icon: JSX.Element;
}

export type DataViewerTypes = DataProps;
