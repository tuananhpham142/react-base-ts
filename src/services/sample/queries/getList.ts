import { BaseAxiosResponse, PaginationDataResponse } from '@/utils/models/common.types';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { RetryOptions } from '@reduxjs/toolkit/dist/query/retry';

export const getList = (
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
    builder.query<PaginationDataResponse<Array<any>>, any>({
        query: (arg: any) => ({
            url: ``,
            method: 'POST',
            body: { ...arg },
        }),
        transformResponse: async (response: BaseAxiosResponse<Array<any>>, meta: any, arg: any) => {
            return response.Data as PaginationDataResponse<Array<any>>;
        },
        async onQueryStarted(
            arg,
            { dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry },
        ) {},
    });
