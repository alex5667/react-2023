// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import ProductItem from './index';
// import { Product } from '../../models/product';

// describe('ProductItem', () => {
//   const product: Product = {
//     id: 1,
//     title: 'iPhone 9',
//     description: 'An apple mobile which is nothing like apple',
//     price: 549,
//     discountPercentage: 12.96,
//     rating: 4.69,
//     stock: 94,
//     brand: 'Apple',
//     category: 'smartphones',
//     thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     images: [
//       'https://i.dummyjson.com/data/products/1/1.jpg',
//       'https://i.dummyjson.com/data/products/1/2.jpg',
//       'https://i.dummyjson.com/data/products/1/3.jpg',
//       'https://i.dummyjson.com/data/products/1/4.jpg',
//       'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//     ],
//   };

//   it('should render product title', () => {
//     render(<ProductItem product={product} />);
//     expect(screen.getByText(/iPhone 9/i)).toBeInTheDocument();
//   });

//   it('should render product description', () => {
//     render(<ProductItem product={product} />);
//     expect(screen.getByText(/apple mobile/i)).toBeInTheDocument();
//   });

//   it('should render product category', () => {
//     render(<ProductItem product={product} />);
//     expect(screen.getByText(/smartphones/i)).toBeInTheDocument();
//   });

//   it('should render product brand', () => {
//     render(<ProductItem product={product} />);
//     expect(screen.getByText(/Brand/i)).toBeInTheDocument();
//   });

//   it('should render product stock', () => {
//     render(<ProductItem product={product} />);
//     expect(screen.getByText(/94/i)).toBeInTheDocument();
//   });

//   it('should render product price', () => {
//     render(<ProductItem product={product} />);
//     expect(screen.getByText(/549/i)).toBeInTheDocument();
//   });
// });
