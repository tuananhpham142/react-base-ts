import { BaseAxiosResponseGetDetail } from '@/utils/models/common.types';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { RetryOptions } from '@reduxjs/toolkit/dist/query/retry';

export const getDetail = (
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
    builder.query<any, any>({
        query: (arg: any) => ({
            url: ``,
            method: 'GET',
        }),
        transformResponse: async (
            response: BaseAxiosResponseGetDetail<any>,
            meta: any,
            arg: any,
        ) => {
            return response.Data as any;
        },
        async onQueryStarted(
            arg,
            { dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry },
        ) {},
    });
