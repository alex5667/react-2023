import { render, screen, waitFor } from '@testing-library/react';
import HomeHook from './index';
import { Provider } from 'react-redux';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { RootState, rootReducer } from '../../redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { productsApi } from '../../services/ProductsApi';

describe('HomeHook', () => {
  let store: EnhancedStore<RootState>;
  let queryClient: QueryClient;
  let server: ReturnType<typeof setupServer>;

  beforeAll(() => {
    server = setupServer(
      rest.get('https://dummyjson.com/products', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            { id: 1, title: 'Product 1', price: 10 },
            { id: 2, title: 'Product 2', price: 20 },
          ])
        );
      })
    );
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  beforeEach(() => {
    store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
    });

    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
  });

  afterEach(() => {
    queryClient.clear();
  });

  it('renders the filtered products list and pagination components', async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <HomeHook />
        </QueryClientProvider>
      </Provider>
    );

    // Wait for products to load
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());

    const productsListElement = screen.getByTestId('products-list');
    expect(productsListElement).toBeInTheDocument();

    const paginationElement = screen.getByTestId('products-pagination');
    expect(paginationElement).toBeInTheDocument();
    expect(screen.queryByText('Error')).toBeNull();
  });
  it('should render the loading spinner when data is being fetched', async () => {
    // Arrange
    jest.mock('services/ProductsApi', () => ({
      productsApi: {
        useFetchAllProductsQuery: () => ({
          data: null,
          isLoading: true,
          error: null,
        }),
      },
    }));
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <HomeHook />
        </QueryClientProvider>
      </Provider>
    );

    // Act
    await waitFor(() => screen.getByTestId('loading-spinner'));

    // Assert
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    expect(screen.queryByText('Error')).toBeNull();
    expect(screen.queryByText('Product 1')).toBeNull();
    expect(screen.queryByText('Product 2')).toBeNull();
  });
});
