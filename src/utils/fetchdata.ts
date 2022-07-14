import axios from 'axios';

// gets the access token
function getToken(): string {
	const acessToken = JSON.parse(
		localStorage.getItem('accessToken') || `{"token": ""}`
	);
	return `Bearer ${acessToken.token}`;
}

// sets default values for axios instance
const fetchAPI = axios.create({
	baseURL: 'http://localhost:8500/api/v1',
	transformResponse: [
		function (data) {
			return JSON.parse(data);
		},
	],
});
fetchAPI.defaults.headers.common['Accept'] = 'application/json';
fetchAPI.defaults.headers.common['Authorization'] = getToken();

export default fetchAPI;
