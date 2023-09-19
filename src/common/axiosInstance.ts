import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_LOSTARK_API_URL,
});

axiosInstance.defaults.headers.common.Authorization = `Bearer ${process.env.REACT_APP_LOSTARK_API_KEY}`;

export default axiosInstance;
