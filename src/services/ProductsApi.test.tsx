import { render } from '@testing-library/react';
import { useFetchAllProductsQuery } from './ProductsApi';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

type FetchAllProductsParams = {
  search: string;
  limit: number;
};

const server = setupServer(
  rest.get('https://dummyjson.com/products', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        products: [
          {
            id: 1,
            title: 'Product1',
            description: 'Description 1',
            price: 10,
            discountPercentage: 0,
            rating: 4.5,
            stock: 5,
            brand: 'Brand 1',
            category: 'Category 1',
            thumbnail: 'https://dummyimage.com/200x200/000/fff',
            images: ['https://dummyimage.com/400x400/000/fff'],
          },
          {
            id: 2,
            title: 'Product2',
            description: 'Description 2',
            price: 20,
            discountPercentage: 10,
            rating: 4,
            stock: 10,
            brand: 'Brand 2',
            category: 'Category 2',
            thumbnail: 'https://dummyimage.com/200x200/000/fff',
            images: ['https://dummyimage.com/400x400/000/fff'],
          },
        ],
        total: 2,
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('useFetchAllProductsQuery', () => {
  it('should return correct data', async () => {
    function TestComponent() {
      const result = useFetchAllProductsQuery({ search: '', limit: 10 } as FetchAllProductsParams);
      if (result.isLoading) {
        return <div>Loading...</div>;
      }
      if (result.isError) {
        return <div>Error: {result.error.message}</div>;
      }
      return (
        <ul>
          {result.data?.products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      );
    }

    const { findByText } = render(
      <Provider store={store}>
        <TestComponent />
      </Provider>
    );
    const product1Element = await findByText(/Product1/);
    const product2Element = await findByText(/Product2/);

    expect(product1Element).toBeInTheDocument();
    expect(product2Element).toBeInTheDocument();
  });
});
