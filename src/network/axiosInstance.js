import axios from 'axios';
import Env from '../env.json'

// Utility function to generate query strings
export const querystring = (query = {}) => {
    return Object.entries(query)
        .filter(([_, value]) => value !== undefined)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
};

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
    baseURL: Env.BASE_URL,
    headers: { 'Content-Type': 'application/json' },
});

// Add a request interceptor to include the auth token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = getAuthToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('USER_DETAILS');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Helper function to get the auth token from localStorage
export const getAuthToken = () => {
    try {
        const admin = localStorage.getItem('USER_DETAILS');
        if (admin) {
            const { token } = JSON.parse(admin);
            return token;
        }
    } catch (error) {
        console.error('Error retrieving auth token:', error);
    }
    return null;
};

// Function to handle GET requests
export const getRequest = async (url, params = {}) => {
    const query = querystring(params);
    const response = await axiosInstance.get(`${url}${query ? `?${query}` : ''}`);
    return response.data;
};

// Function to handle POST requests
export const postRequest = async (url, data = {}) => {
    const response = await axiosInstance.post(url, data);
    return response.data;
};

// Function to handle form data uploads
export const uploadFiles = async (url, files, params = {}) => {
    const formData = generateFormData(files, params);
    const response = await axiosInstance.post(url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
};

// Utility to generate FormData for file uploads
export const generateFormData = (files, body = {}) => {
    const formData = new FormData();
    if (Array.isArray(files)) {
        files.forEach((file) => formData.append('files', file));
    } else if (files) {
        formData.append('file', files);
    }
    Object.keys(body).forEach((key) => formData.append(key, body[key]));
    return formData;
};

export default axiosInstance;