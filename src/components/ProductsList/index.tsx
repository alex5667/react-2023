import React, { FC, useState } from 'react';
import ProductItem from 'components/ProductItem';
import './ProductsList.scss';
import { Product } from '../../models/product';

interface ListProps {
  products: Product[];
}

const ProductsList: FC<ListProps> = ({ products }) => {
  if (!products.length) {
    return <h2> Товары не найдены</h2>;
  }

  return (
    <div data-testid="products-list" className="products-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
