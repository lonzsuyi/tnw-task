import axios, { AxiosResponse } from 'axios';
import {
    AUTH_TOKEN,
    USER_INFO,
} from '../constants/localStorage';

/**
 * Define http request types
 */
export type ResponseResult<T = unknown> = {
    code: number,
    data: T,
    message: string
}

// Axios instance
const httpRequest = axios.create()

// Set proxy and baseUrl
httpRequest.defaults.baseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL ? process.env.NEXT_PUBLIC_API_BASE_URL : 'http://localhost:3000'}`;

// Add a request interceptor
httpRequest.interceptors.request.use((config) => {
    const timeoffset = new Date().getTimezoneOffset();
    const offsetHours = timeoffset / 60;
    config.headers = Object.assign(config.headers, {
        // Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`,
        "Content-Security-Policy": 'upgrade-insecure-requests',
        timezone: offsetHours
    });

    //  Request info log
    console.log('========================== Request ==========================');
    console.log('Method: ', config.method);
    console.log('URL: ', config.url);
    console.log('========================== Response ==========================');
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Add a response interceptor
httpRequest.interceptors.response.use((res: AxiosResponse<ResponseResult, unknown>) => {
    const code = res.data.code;
    if (code === 401 || code === 403) {
        // localStorage.removeItem(AUTH_TOKEN);
        // localStorage.removeItem(USER_INFO);
    }
    return res;
}, (err) => {
    console.log(err,'why')
    if (axios.isAxiosError(err)) {
        // Access to config, request, and response
        const code: number = err.response?.status && Number(err.response?.status) > 0 ? Number(err.response?.status) : -1
        if (code === 401 || code === 403) {
            // localStorage.removeItem(AUTH_TOKEN);
            // localStorage.removeItem(USER_INFO);
        }

        const result: ResponseResult = {
            code: code,
            message: `${err.response?.data ? err.response?.data : 'request api error'}`,
            data: null
        }
        return Promise.reject(result);
    } else {
        // Just a stock error
        const result: ResponseResult = {
            code: -1,
            message: 'request error',
            data: null
        }
        return Promise.reject(result);
    }
});

export default httpRequest