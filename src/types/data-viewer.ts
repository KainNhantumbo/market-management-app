interface DataProps {
  title: string;
  details: string;
}

export interface Props {
	quit: () => void;
	data: DataProps[];
}

export type DataViewerInterface = DataProps[];
