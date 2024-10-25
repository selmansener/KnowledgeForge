// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from './store';

import { config } from '../config';

// initialize an empty api service that we'll inject endpoints into later as needed
export const emptySplitApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: config.api,
        prepareHeaders: (headers, { getState }) => {
            //  const state = getState() as RootState;
            //  const { traceId } = state.trace;

            // const newTraceId = generateGUID();

            // headers.set("Authorization", `Bearer ${state.auth.token}`);

            return headers;
        },
    }),
    refetchOnMountOrArgChange: true,
    endpoints: () => ({}),
})