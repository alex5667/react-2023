import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from 'models/product';

export interface ProductResponse {
  products: Product[];
  total: number;
}

interface Params {
  limit: number;
  skip: number;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  tagTypes: ['Products'],
  endpoints: (build) => ({
    fetchAllProducts: build.query<ProductResponse, Params>({
      query: ({ limit, skip }) => ({
        url: `/products`,
        params: {
          limit: limit,
          skip: skip,
        },
      }),
    }),
  }),
});
