import React, { Component } from 'react';
import ProductItem from 'components/ProductItem';
import './ProductsList.scss';
import { Product } from '../../models/product';

interface ListProps {
  products: Product[];
}

export class ProductsList extends Component<ListProps> {
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
