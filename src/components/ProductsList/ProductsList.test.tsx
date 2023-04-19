import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ProductsList from './index';
import React from 'react';

const mockStore = configureMockStore();

describe('ProductsList', () => {
  it('should render "Товары не найдены" message if there are no products', () => {
    const store = mockStore({
      homeSlice: {
        products: [],
        sort: 'title',
        query: '',
      },
    });

    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    const message = screen.getByTestId('products-list');

    expect(message).toHaveTextContent('Товары не найдены');
  });

  it('should render all products when there are products in the store', () => {
    const store = mockStore({
      homeSlice: {
        products: [
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
        ],
        sort: 'title',
        query: '',
      },
    });

    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );

    const products = screen.getAllByTestId('product-item');

    expect(products).toHaveLength(2);
  });
});
