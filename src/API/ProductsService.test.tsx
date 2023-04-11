import ProductService from './ProductsService';

describe('ProductService', () => {
  describe('getAll', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              products: [
                { id: 1, title: 'Product 1', price: 10 },
                { id: 2, title: 'Product 2', price: 20 },
              ],
              total: 2,
            }),
        })
      ) as jest.Mock;
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should fetch and return product data', async () => {
      const products = await ProductService.getAll();
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('https://dummyjson.com/products?');

      expect(products!.products.length).toEqual(2);
      expect(products!.total).toEqual(2);
      expect(products!.products[0].id).toEqual(1);
      expect(products!.products[0].title).toEqual('Product 1');
      expect(products!.products[0].price).toEqual(10);
    });

    it('should include limit and skip params when provided', async () => {
      await ProductService.getAll(10, 5);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('https://dummyjson.com/products?limit=10&skip=5');
    });
  });

  describe('getByQuery', () => {
    beforeEach(() => {
      // Mock the fetch method
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              products: [
                { id: 1, title: 'Product', price: 10 },
                { id: 2, title: 'Product 2', price: 20 },
              ],
              total: 2,
            }),
        })
      ) as jest.Mock;
    });

    afterEach(() => {
      jest.resetAllMocks();
    });

    it('should fetch and return product data', async () => {
      const products = await ProductService.getByQuery('test');
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith('https://dummyjson.com/products/search?q=test');

      expect(products!.products.length).toEqual(2);
      expect(products!.total).toEqual(2);
      expect(products!.products[0].id).toEqual(1);
      expect(products!.products[0].title).toEqual('Product');
      expect(products!.products[0].price).toEqual(10);
    });

    it('should not make a fetch call if no query is provided', async () => {
      const products = await ProductService.getByQuery('');
      expect(global.fetch).toHaveBeenCalledTimes(0);
      expect(products).toBeUndefined();
    });
  });
});
