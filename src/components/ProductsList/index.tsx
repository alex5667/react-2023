import React, { FC } from 'react';
import ProductItem from 'components/ProductItem';
import './ProductsList.scss';
import { Product } from '../../models/product';

interface ListProps {
  products: Product[];
}

const index: FC<ListProps> = (props) => {
  return (
    <div data-testid="products-list" className="products-list">
      {props.products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default index;
