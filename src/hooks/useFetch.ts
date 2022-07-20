import axios from '../api/axios';

type fetchConfig = {
	method: string;
	data?: object | object[];
	url: string;
};


const useFetchAPI = (config: fetchConfig) => {
	const acessToken = JSON.parse(
		localStorage.getItem('accessToken') || `{"token": ""}`
	);
	const token = `Bearer ${acessToken.token}`;
	return axios({
		...config,
		headers: {
			authorization: token,
		},
	});
};

export default useFetchAPI;
