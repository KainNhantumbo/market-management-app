import axios from 'axios';

const BASE_URL = 'http://localhost:8500/api/v1';

 axios.create({
	 baseURL: BASE_URL,
	 transformResponse: [
		function (data) {
			return JSON.parse(data);
		},
	],
});
axios.defaults.headers.common['Accept'] = 'application/json';

export default axios