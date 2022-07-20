import { AxiosPromise } from 'axios';
import customConnection from '../api/axios';

type fetchConfig = {
	method: string;
	url: string;
	data?: object | object[];
};

/**
 * Makes connection to the server api
 * @param config object with connection method, url and data (optional)
 * @returns AxiosPromise<any>
 */
const useFetchAPI = (config: fetchConfig): AxiosPromise<any> => {
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
