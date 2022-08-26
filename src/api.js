import axios from 'axios';

export const instance = axios.create({
    baseURL: VITE_SERVER_URL,
    withCredentials: true,
});