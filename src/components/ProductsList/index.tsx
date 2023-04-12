import React, { FC } from 'react';
import ProductItem from 'components/ProductItem';
import cl from './ProductsList.module.scss';
import { useAppSelector } from 'hooks/redux';
import { useSortedSearchedProducts } from 'hooks/useProducts';
import { Product } from '../../models/product';

const ProductsList: FC = () => {
  const { products, sort, query } = useAppSelector((state) => state.homeSlice);

  const sortedSearchedProducts = useSortedSearchedProducts(products, sort as keyof Product, query);

  if (!sortedSearchedProducts.length) {
    return <h2 className={cl.h2}> Товары не найдены</h2>;
  }

  return (
    <div data-testid="products-list" className={cl.productsList}>
      {sortedSearchedProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
