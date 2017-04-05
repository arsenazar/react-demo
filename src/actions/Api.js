import axios from 'axios';

const API_BACKEND = 'http://localhost:3001';

export const STATUS_URL = '/api/status';

let instance = axios.create({
  baseURL: API_BACKEND,
});

export default instance;
