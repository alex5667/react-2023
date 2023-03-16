import React, { Component } from 'react';
import products from 'db/products';
import ProductItem from 'components/ProductItem/ProductItem';

export class ProductsList extends Component {
  render() {
    return (
      <div className="products-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

export default ProductsList;
