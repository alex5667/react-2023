import React, { FC } from 'react';
import ProductItem from 'components/ProductItem';
import { Product } from '../../models/product';
import cl from './ProductsList.module.scss';

interface ListProps {
  products: Product[];
}

const ProductsList: FC<ListProps> = ({ products }) => {
  if (!products.length) {
    return <h2 className={cl.h2}> Товары не найдены</h2>;
  }

  return (
    <div data-testid="products-list" className={cl.productsList}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
