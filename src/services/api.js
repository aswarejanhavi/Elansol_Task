import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend API base URL
  timeout: 10000, // 10 seconds timeout
});

export default instance;
