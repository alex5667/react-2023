import homeReducer, {
  setProducts,
  addQuery,
  addSort,
  homeSlice,
  setTotalCount,
  setLimit,
  setPage,
  setTotalPages,
  setIsLoading,
} from './HomeSlice';
import { PayloadAction } from '@reduxjs/toolkit';

describe('homeSlice', () => {
  const initialState = {
    products: [],
    query: '',
    sort: '',
    totalPages: 0,
    limit: 24,
    page: 1,
    totalCount: 0,
    isLoading: false,
    error: undefined,
  };

  it('should handle setting products', () => {
    const products = [
      {
        id: 1,
        title: 'iPhone 9',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/1/1.jpg',
          'https://i.dummyjson.com/data/products/1/2.jpg',
          'https://i.dummyjson.com/data/products/1/3.jpg',
          'https://i.dummyjson.com/data/products/1/4.jpg',
          'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        ],
      },
      {
        id: 2,
        title: 'Samsung Galaxy S20',
        description: 'The best smartphone from Samsung',
        price: 799,
        discountPercentage: 0,
        rating: 4.78,
        stock: 64,
        brand: 'Samsung',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        images: [
          'https://i.dummyjson.com/data/products/2/1.jpg',
          'https://i.dummyjson.com/data/products/2/2.jpg',
          'https://i.dummyjson.com/data/products/2/3.jpg',
          'https://i.dummyjson.com/data/products/2/4.jpg',
          'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        ],
      },
    ];
    const newState = homeReducer(initialState, setProducts(products));
    expect(newState.products.length).toEqual(2);
    expect(newState.products).toEqual(products);
  });
  it('should handle addQuery', () => {
    const query = 'test query';
    const action: PayloadAction<string> = { type: addQuery.type, payload: query };
    const state = homeReducer(initialState, action);
    expect(state.query).toEqual(query);
  });

  it('should handle addSort', () => {
    const sort = 'sort';
    const action: PayloadAction<string> = { type: addSort.type, payload: sort };
    const state = homeReducer(initialState, action);
    expect(state.sort).toEqual(sort);
  });
  it('should set the total pages based on the total count and limit', () => {
    const totalCount = 100;
    const limit = 24;
    const expectedTotalPages = 5;

    const state = homeSlice.reducer(initialState, setTotalCount(totalCount));
    const nextState = homeSlice.reducer(state, setLimit(limit));
    const finalState = homeSlice.reducer(nextState, setTotalPages());

    expect(finalState.totalPages).toEqual(expectedTotalPages);
  });
  it('should set the limit', () => {
    const limit = 48;

    const state = homeSlice.reducer(initialState, setLimit(limit));

    expect(state.limit).toEqual(limit);
  });
  it('should set the page', () => {
    const page = 2;

    const state = homeSlice.reducer(initialState, setPage(page));

    expect(state.page).toEqual(page);
  });
  it('should set the total count', () => {
    const totalCount = 100;

    const state = homeSlice.reducer(initialState, setTotalCount(totalCount));

    expect(state.totalCount).toEqual(totalCount);
  });

  it('should set the loading state', () => {
    const isLoading = true;

    const state = homeSlice.reducer(initialState, setIsLoading(isLoading));

    expect(state.isLoading).toEqual(isLoading);
  });
});
