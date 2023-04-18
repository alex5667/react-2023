import { Product } from 'models/product';
import { useSortedSearchedProducts, useSortedProducts } from './useProducts';
import { useMemo } from 'react';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useMemo: jest.fn(),
}));

const products: Product[] = [
  {
    id: 1,
    title: 'Product1',
    description: 'Description 1',
    price: 10,
    discountPercentage: 0,
    rating: 4,
    stock: 5,
    brand: 'Brand 1',
    category: 'Category 1',
    thumbnail: 'product1.jpg',
    images: ['product1.jpg'],
  },
  {
    id: 2,
    title: 'Product2',
    description: 'Description 2',
    price: 20,
    discountPercentage: 10,
    rating: 3,
    stock: 10,
    brand: 'Brand 2',
    category: 'Category 2',
    thumbnail: 'product2.jpg',
    images: ['product2.jpg'],
  },
  {
    id: 3,
    title: 'Product3',
    description: 'Description 3',
    price: 15,
    discountPercentage: 5,
    rating: 5,
    stock: 3,
    brand: 'Brand 3',
    category: 'Category 3',
    thumbnail: 'product3.jpg',
    images: ['product3.jpg'],
  },
];

describe('useSortedSearchedProducts', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return sorted and searched products', () => {
    const query = 'Product1';
    const sort = 'price';
    const searchedProducts: Product[] = [products[0]];
    (useMemo as jest.MockedFunction<typeof useMemo>)
      .mockReturnValueOnce(products)
      .mockReturnValueOnce(searchedProducts);

    const sortedSearchedProducts = useSortedSearchedProducts(products, sort, query);

    expect(sortedSearchedProducts).toEqual(searchedProducts);
  });

  it('should return searched products when query is provided', () => {
    const query = 'Product1';
    const searchedProducts: Product[] = [products[0]];
    (useMemo as jest.MockedFunction<typeof useMemo>)
      .mockReturnValueOnce(products)
      .mockReturnValueOnce(searchedProducts);

    const sortedSearchedProducts = useSortedSearchedProducts(products, '', query);

    expect(sortedSearchedProducts).toEqual(searchedProducts);
  });
  it('should return searched products in original order when sort is empty', () => {
    const query = 'Product';
    const sort = '';
    const searchedProducts: Product[] = [products[0], products[1]];
    (useMemo as jest.MockedFunction<typeof useMemo>)
      .mockReturnValueOnce(products)
      .mockReturnValueOnce(searchedProducts);

    const sortedSearchedProducts = useSortedSearchedProducts(products, sort, query);

    expect(sortedSearchedProducts).toEqual(searchedProducts);
  });
  it('should return products in original order when both query and sort are empty', () => {
    const query = '';
    const sort = '';
    const searchedProducts: Product[] = products;

    (useMemo as jest.MockedFunction<typeof useMemo>)
      .mockReturnValueOnce(products)
      .mockReturnValueOnce(searchedProducts);

    const sortedSearchedProducts = useSortedSearchedProducts(products, sort, query);

    expect(sortedSearchedProducts).toEqual(searchedProducts);
  });

  it('should return an empty array when products is empty', () => {
    const query = '';
    const sort = '';
    const searchedProducts: Product[] = [];

    (useMemo as jest.MockedFunction<typeof useMemo>)
      .mockReturnValueOnce(products)
      .mockReturnValueOnce(searchedProducts);

    const sortedSearchedProducts = useSortedSearchedProducts(products, sort, query);

    expect(sortedSearchedProducts).toEqual(searchedProducts);
  });
  it('should return sorted products when query is empty', () => {
    const query = '';
    const sort = 'price';
    const searchedProducts: Product[] = [products[1], products[2], products[0]];

    (useMemo as jest.MockedFunction<typeof useMemo>)
      .mockReturnValueOnce(products)
      .mockReturnValueOnce(searchedProducts);

    const sortedSearchedProducts = useSortedSearchedProducts(products, sort, query);

    expect(sortedSearchedProducts).toEqual(searchedProducts);
  });
  it('should return an empty array when search result is empty', () => {
    const query = 'Non-existing product';
    const sort = 'price';
    const searchedProducts: Product[] = [];
    (useMemo as jest.MockedFunction<typeof useMemo>)
      .mockReturnValueOnce(products)
      .mockReturnValueOnce(searchedProducts);

    const sortedSearchedProducts = useSortedSearchedProducts(products, sort, query);

    expect(sortedSearchedProducts).toEqual(searchedProducts);
  });
  it('should return products in ascending order when sort is "name"', () => {
    const sort = 'title';
    const sortedProducts = [products[0], products[1], products[2]];
    (useMemo as jest.MockedFunction<typeof useMemo>)
      .mockReturnValueOnce(products)
      .mockReturnValueOnce(sortedProducts);

    const result = useSortedProducts(products, sort);

    expect(result).toEqual(sortedProducts);
  });

  it('should return products in descending order when sort is "price"', () => {
    const sort = 'price';
    const sortedProducts = [products[0], products[1], products[2]];
    (useMemo as jest.MockedFunction<typeof useMemo>)
      .mockReturnValueOnce(products)
      .mockReturnValueOnce(sortedProducts);
    const result = useSortedProducts(products, sort);

    expect(result).toEqual(sortedProducts);
  });
  it('should return original array when sort is empty string', () => {
    const sort = '';
    const sortedProducts = [...products];
    (useMemo as jest.MockedFunction<typeof useMemo>)
      .mockReturnValueOnce(products)
      .mockReturnValueOnce(sortedProducts);

    const result = useSortedProducts(products, sort);

    expect(result).toEqual(sortedProducts);
  });
});
