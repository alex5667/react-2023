import { Product } from '../models/product';
import { searchProducts } from './searchProducts';

const products: Product[] = [
  {
    id: 1,
    title: 'iPhone',
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
    id: 3,
    title: 'Samsung Universe 9',
    description: "Samsung's new variant which goes beyond Galaxy to the Universe",
    price: 1249,
    discountPercentage: 15.46,
    rating: 4.09,
    stock: 36,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
    images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
  },
];

describe('searchProducts', () => {
  it('should return matching products when searching by title', () => {
    const result = searchProducts(products, 'iphone');
    expect(result).toContainEqual(products[0]);
    expect(result).not.toContainEqual(products[1]);
  });

  it('should return an empty array when no matching products are found', () => {
    const result = searchProducts(products, 'notfound');
    expect(result).toEqual([]);
  });
});
