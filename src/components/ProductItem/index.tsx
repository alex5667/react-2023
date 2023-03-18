import React, { FC } from 'react';
import { Product } from 'db/products';
import './ProductItem.scss';

interface ItemProps {
  product: Product;
}

const ProductItem: FC<ItemProps> = ({ product }) => {
  return (
    <article data-testid="product-item" className="product" id={product.id.toString()}>
      <div className="product__content">
        <div className="product__img">
          <img src={product.thumbnail} alt="Product"></img>
        </div>
        <div className="product__main">
          <h3 className="product__title">{product.title}</h3>
          <div className="product__description">
            <p className="product__descriptions">
              <span>Description:</span> {product.description}
            </p>
            <p className="product__category">
              <span>Category:</span> {product.category}
            </p>
            <p className="product__brand">
              <span>Brand:</span> {product.brand}
            </p>
            <p className="product__stock">
              <span>Stock:</span> {product.stock}
            </p>
            <p className="product__rating">
              <span>Rating:</span> {product.rating}
            </p>
            <p className="product__discount">
              <span>Discount:</span> {product.discountPercentage}
            </p>
            <p className="product__price">
              <span>Price: €</span> {product.price}
            </p>
          </div>
          {/* <div className="product__footer">
            <a type="button" className="link-button link-button-add-to-cart">
              Add to cart
            </a>
            <a href="/#/product-details/100" className="link-button link-button-details" id="100">
              Details
            </a>
          </div> */}
        </div>
      </div>
    </article>
  );
};

export default ProductItem;
