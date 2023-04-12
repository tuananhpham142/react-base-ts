import { decryptAES } from '@/utils/crypts';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { RetryOptions } from '@reduxjs/toolkit/dist/query/retry';
import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    retry,
} from '@reduxjs/toolkit/query/react';
import { getCookie, removeCookie } from '../utils';

export const API_URL = process.env.API_URL;

interface ExtendedHeaders extends Headers {
    ClientId?: string;
    ClientSecret?: string;
}
const staggeredBaseQuery = retry(
    fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers: ExtendedHeaders, { getState }) => {
            const token = getCookie(process.env.AUTH_KEY as string, decryptAES);
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
                headers.set('AcceptLanguage', getCookie(process.env.LANGUAGE as string));
            }
            return headers;
        },
    }),
    {
        maxRetries: 0,
    },
);
const baseQueryWithReAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError,
    {} & RetryOptions,
    FetchBaseQueryMeta
> = async (args, api, extraOptions) => {
    let result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta> =
        (await staggeredBaseQuery(args, api, extraOptions)) as QueryReturnValue<
            unknown,
            FetchBaseQueryError,
            FetchBaseQueryMeta
        >;
    if (result?.error) {
        switch (result.error.status) {
            case 401:
                removeCookie(process.env.REACT_APP_AUTH_KEY as string);
                removeCookie(process.env.REACT_APP_AUTH_REFRESH as string);

                return result;
            case 403:
                // Do Something here
                return result;
            case 400:
                if (result?.error?.data && typeof result?.error?.data === 'object') {
                    if ('Message' in result.error.data) {
                        // Do Something here
                    }

                    if ('title' in result.error.data) {
                        // Do Something here
                    }
                }
                return result;
            default:
                // Do Something here
                return result;
        }
    }
    return result;
};
// Create our baseQuery instance

// const baseQueryWithRetry = axiosBaseQuery({
//     baseUrl: API_URL,
// });

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReAuth,
    // extractRehydrationInfo(action, { reducerPath }) {
    //     if (action.type === HYDRATE) {
    //         return action.payload[reducerPath];
    //     }
    // },
    tagTypes: [],
    endpoints: () => ({}),
});
