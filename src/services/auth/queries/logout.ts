import { LoginResponse } from '@/models/Auth/AuthResponse';
import { removeCookie } from '@/utils/index';
import { BaseAxiosResponseGetAll } from '@/utils/models/common.types';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { RetryOptions } from '@reduxjs/toolkit/dist/query/retry';

export const logout = (
    builder: EndpointBuilder<
        BaseQueryFn<
            string | FetchArgs,
            unknown,
            FetchBaseQueryError,
            RetryOptions,
            FetchBaseQueryMeta
        >,
        string,
        string
    >,
) =>
    builder.mutation<any, any>({
        query: (arg: any) => {
            return {
                url: '',
                method: 'POST',
                body: {
                    ...arg,
                },
            };
        },
        transformResponse: async (
            response: BaseAxiosResponseGetAll<LoginResponse>,
            meta: any,
            arg: any,
        ) => {
            window.location.href = '/auth/login';
            removeCookie(process.env.REACT_APP_AUTH_KEY as string);
            removeCookie(process.env.REACT_APP_AUTH_REFRESH as string);
            return response.Data;
        },
    });
