import { decryptAES } from '@/utils/crypts';
import type { InternalAxiosRequestConfig } from 'axios';
import axiosBase from 'axios';
import { getCookie, removeCookie } from '../utils';
import { API_URL } from './api';

export type AxiosRequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const accessControlAllowOrigin = {
    'Access-Control-Allow-Origin': '*',
};

let axios = axiosBase.create({
    baseURL: API_URL,
    withCredentials: false, // to use cookies
    headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${getCookie(process.env.AUTH_KEY as string, decryptAES)}`,
        timeout: 30000,
        ...accessControlAllowOrigin,
    },
});

axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (!config?.headers) {
            throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
        }
        config.headers.Authorization = 'application/json';
        config.headers.Authorization = `Bearer ${getCookie(
            process.env.AUTH_KEY as string,
            decryptAES,
        )}`;
        config.headers.Timeout = 30000;
        config.headers.AcceptLanguage = getCookie(process.env.LANGUAGE as string);

        return { ...config, ...accessControlAllowOrigin };
    },
    (error: any) => Promise.reject(error),
);

axios.interceptors.response.use(undefined, async (err) => {
    const error = err.response;
    // if error is 401
    if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
        removeCookie(process.env.REACT_APP_AUTH_KEY as string);
        removeCookie(process.env.REACT_APP_AUTH_REFRESH as string);
    }
});

export default axios;
