import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.devUrl }),
  tagTypes: ['categories'],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => 'categories/includingJobs',
      transformResponse: (response) => response.data.data,
      providesTags: ['categories'],
    }),
    reorderCategories: builder.mutation({
      query: (categories) => ({
        url: 'categories/update',
        method: 'PATCH',
        body: categories,
      }),
      invalidatesTags: ['categories'],
    }),
  }),
});

export const { useGetCategoriesQuery, useReorderCategoriesMutation } = apiSlice;
