import moment from 'moment';

export const fullDate = (time: string) => {
	const date = moment(time).format('LLLL');
	return date;
};

export const calendarDate = (time: string) => {
	const date = moment(time).calendar();
	return date;
};
