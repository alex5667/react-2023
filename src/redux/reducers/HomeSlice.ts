import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { getPageCount } from 'utils/pages';

interface homeState {
  products: Product[];
  query: string;
  sort: string;
  totalPages: number;
  limit: number;
  page: number;
  totalCount: number;
  isLoading: boolean;
  error: string | undefined;
}
const initialState: homeState = {
  products: <Product[]>[],
  query: '',
  sort: '',
  totalPages: 0,
  limit: 24,
  page: 1,
  totalCount: 0,
  isLoading: false,
  error: undefined,
};

export const homeSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = [...action.payload];
    },
    addQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    addSort(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    setTotalPages(state) {
      state.totalPages = getPageCount(state.totalCount, state.limit);
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
  },
});
export const {
  setProducts,
  addQuery,
  addSort,
  setLimit,
  setTotalCount,
  setTotalPages,
  setPage,
  setIsLoading,
  setError,
} = homeSlice.actions;

export default homeSlice.reducer;
