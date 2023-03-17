import React, { Component } from 'react';
import ProductItem from 'components/ProductItem/ProductItem';
import './ProductsList.scss';
import { Product } from 'db/products';

interface ListProps {
  products: Product[];
}

export class ProductsList extends Component<ListProps, ListProps> {
  render() {
    return (
      <div className="products-list">
        {this.props.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductsList;
