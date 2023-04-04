import React, { FC } from 'react';
import { Product } from '../../models/product';
import cl from './ModalItem.module.scss';

interface ModalItem {
  product: Product;
}
const ModalItem: FC<ModalItem> = ({ product }) => {
  return (
    <div className={cl.product__content}>
      <div className={cl.product__img}>
        <img src={product.thumbnail} alt="Product"></img>
      </div>
      <div className={cl.product__main}>
        <h3 className={cl.product__title}>{product.title.toLocaleUpperCase()}</h3>
        <div className={cl.product__description}>
          <p className={cl.product__descriptions}>
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
      </div>
    </div>
  );
};

export default ModalItem;
