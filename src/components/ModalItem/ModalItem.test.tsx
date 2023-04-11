import React from 'react';
import { render } from '@testing-library/react';
import ModalItem from './index';
import { Product } from '../../models/product';

describe('ModalItem component', () => {
  const product: Product = {
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

  it('renders the correct product information', () => {
    const { getByText } = render(<ModalItem product={product} />);

    expect(getByText(product.title.toUpperCase())).toBeInTheDocument();
    expect(getByText(/iPhone/i)).toBeInTheDocument();
    expect(getByText(/smartphones/i)).toBeInTheDocument();
    expect(getByText(/94/i)).toBeInTheDocument();
  });
});
