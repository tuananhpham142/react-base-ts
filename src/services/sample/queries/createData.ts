import { BaseAxiosResponseGetDetail } from '@/utils/models/common.types';
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { RetryOptions } from '@reduxjs/toolkit/dist/query/retry';

export const createData = (
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
    builder.mutation<BaseAxiosResponseGetDetail, any>({
        query: (arg: any) => ({
            url: ``,
            method: 'POST',
            body: { ...arg },
        }),
        transformResponse: async (response: BaseAxiosResponseGetDetail, meta: any, arg: any) => {
            return response as BaseAxiosResponseGetDetail;
        },
        async onQueryStarted(
            arg,
            { dispatch, getState, extra, requestId, queryFulfilled, getCacheEntry },
        ) {},
    });
