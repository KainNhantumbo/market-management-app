import axios from 'axios';

const BASE_URL = 'http://localhost:8500/api/v1';

const customConnection = axios.create({
	baseURL: BASE_URL,
});
axios.defaults.headers.common['Accept'] = 'application/json';

export default customConnection;
