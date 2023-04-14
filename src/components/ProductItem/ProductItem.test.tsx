import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureMockStore from 'redux-mock-store';
import ProductItem from './index';
import { Product } from '../../models/product';

const mockStore = configureMockStore();
const store = mockStore({
  // mock state for the store
  homeSlice: {
    totalPages: 5,
    page: 1,
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
    ],
  },
});

describe('ProductItem component', () => {
  const mockProduct: Product = {
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
  };

  test('renders product item with correct data', () => {
    render(
      <Provider store={store}>
        <ProductItem product={mockProduct} />
      </Provider>
    );

    expect(screen.getByTestId('product-item')).toBeInTheDocument();

    expect(screen.getByTestId('product-price')).toHaveTextContent('549');
    expect(screen.getByTestId('product-discount')).toHaveTextContent('12.96');
  });

  test('opens modal with product details when clicked', () => {
    render(
      <Provider store={store}>
        <ProductItem product={mockProduct} />
      </Provider>
    );

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('product-item'));
    expect(screen.getByTestId('product-priceModal')).toHaveTextContent('549');
    expect(screen.getByTestId('product-discountModal')).toHaveTextContent('12.96');
  });
});
