import customConnection from '../api/axios';

type fetchConfig = {
	method: string;
	data?: object | object[];
	url: string;
};

// fetch data from api
const useFetchAPI = (config: fetchConfig) => {
	const acessToken = JSON.parse(
		localStorage.getItem('accessToken') || `{"token": ""}`
	);
	const token = `Bearer ${acessToken.token}`;
	return customConnection({
		...config,
		headers: {
			authorization: token,
		},
	});
};

export default useFetchAPI;
