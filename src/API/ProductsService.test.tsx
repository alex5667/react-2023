import axios from 'axios';
import ProductService, { ProductResponse } from './ProductsService';

jest.mock('axios');

describe('ProductService', () => {
  let mockGet: jest.Mock;

  beforeAll(() => {
    mockGet = jest.fn();
    (axios.get as jest.Mock) = mockGet;
  });

  afterEach(() => {
    mockGet.mockReset();
  });

  describe('getAll', () => {
    it('should fetch and return product data', async () => {
      const data: ProductResponse = {
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
        total: 1,
      };
      mockGet.mockResolvedValueOnce({ data });

      const result = await ProductService.getAll();

      expect(mockGet).toHaveBeenCalledWith('https://dummyjson.com/products', {
        params: {
          limit: undefined,
          skip: undefined,
        },
      });

      expect(result).toEqual(data);
    });

    it('should handle errors', async () => {
      const error = new Error('Request failed');
      mockGet.mockRejectedValueOnce(error);

      const result = await ProductService.getAll();

      expect(result).toBeUndefined();
      expect(console.error).toHaveBeenCalledWith(error);
    });
  });

  describe('getByQuery', () => {
    it('should fetch and return product data based on query', async () => {
      const query = 'iPhone';
      const data: ProductResponse = {
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
        total: 1,
      };
      mockGet.mockResolvedValueOnce({ data });

      const result = await ProductService.getByQuery(query);

      expect(mockGet).toHaveBeenCalledWith(`https://dummyjson.com/products/search?q=${query}`);
      expect(result).toEqual(data);
    });

    it('should handle empty query', async () => {
      const result = await ProductService.getByQuery('');

      expect(result).toBeUndefined();
    });
  });
});
