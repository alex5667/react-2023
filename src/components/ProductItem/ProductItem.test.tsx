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
        title: 'Product 1',
        description: 'Product 1 description',
        category: 'Category 1',
        brand: 'Brand 1',
        stock: 10,
        rating: 4.5,
        discountPercentage: 20,
        price: 100,
        thumbnail: 'https://example.com/product1.jpg',
        images: [], // add images property with default value
      },
    ],
  },
});

describe('ProductItem component', () => {
  const mockProduct: Product = {
    id: 1,
    title: 'Product 1',
    description: 'Product 1 description',
    category: 'Category 1',
    brand: 'Brand 1',
    stock: 10,
    rating: 4.5,
    discountPercentage: 20,
    price: 100,
    thumbnail: 'https://example.com/product1.jpg',
    images: [], // add images property with default value
  };

  test('renders product item with correct data', () => {
    render(
      <Provider store={store}>
        <ProductItem product={mockProduct} />
      </Provider>
    );

    expect(screen.getByTestId('product-item')).toBeInTheDocument();

    expect(screen.getByText('PRODUCT 1')).toBeInTheDocument();
    expect(screen.getByText('Description: Product 1 description')).toBeInTheDocument();
    expect(screen.getByText('Category: Category 1')).toBeInTheDocument();
    expect(screen.getByText('Brand: Brand 1')).toBeInTheDocument();
    expect(screen.getByText('Stock: 10')).toBeInTheDocument();
    expect(screen.getByText('Rating: 4.5')).toBeInTheDocument();
    expect(screen.getByText('Discount: 20')).toBeInTheDocument();
    expect(screen.getByText('Price: € 100')).toBeInTheDocument();
  });

  test('opens modal with product details when clicked', () => {
    render(
      <Provider store={store}>
        <ProductItem product={mockProduct} />
      </Provider>
    );

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
    userEvent.click(screen.getByTestId('product-item'));
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 1 description')).toBeInTheDocument();
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Brand 1')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText('20%')).toBeInTheDocument();
    expect(screen.getByText('€ 100')).toBeInTheDocument();
  });
});