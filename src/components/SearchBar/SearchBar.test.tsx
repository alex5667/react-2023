import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '.';
import { Product } from 'db/products';
import 'jest-localstorage-mock';

describe('SearchBar', () => {
  const products: Product[] = [
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
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/2/1.jpg',
        'https://i.dummyjson.com/data/products/2/2.jpg',
        'https://i.dummyjson.com/data/products/2/3.jpg',
        'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      ],
    },
  ];

  it('should set the search query in LocalStorage when the input value changes', () => {
    const { getByPlaceholderText } = render(
      <SearchBar products={products} setSearchedProducts={() => {}} />
    );
    const searchInput = getByPlaceholderText('Search product');

    userEvent.type(searchInput, 'product');

    expect(localStorage.setItem).toHaveBeenLastCalledWith('search', 'product');
  });

  it('should update the searched products when the input value changes', () => {
    const setSearchedProducts = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchBar products={products} setSearchedProducts={setSearchedProducts} />
    );
    const searchInput = getByPlaceholderText('Search product');

    userEvent.type(searchInput, 'iPhone 9');

    expect(setSearchedProducts).toHaveBeenCalledTimes(9);
    expect(setSearchedProducts).toHaveBeenCalledWith([
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
    ]);
  });

  afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });
  it('should set the search query from LocalStorage on mount', () => {
    // Mock localStorage.getItem
    const localStorageMock = jest
      .spyOn(window.localStorage, 'getItem')
      .mockImplementation((key) => {
        if (key === 'search') {
          return 'product';
        }
        return null;
      });

    const { getByPlaceholderText } = render(
      <SearchBar products={products} setSearchedProducts={() => {}} />
    );

    expect(localStorageMock).toHaveBeenCalledWith('search');
    expect(getByPlaceholderText('Search product')).toHaveValue('product');

    localStorageMock.mockRestore();
  });
});
