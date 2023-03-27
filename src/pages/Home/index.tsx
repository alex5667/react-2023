import ProductsList from 'components/ProductsList';
import React, { FC, useState } from 'react';
import './Home.scss';
import products from 'db/products';
import { Product } from '../../models/product';
import SearchHookBar from 'components/SearchBar';

const HomeHook: FC = () => {
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  return (
    <section className="main__section">
      <div className="main__container">
        <div className="main__content">
          <SearchHookBar products={products} setSearchedProducts={setSearchedProducts} />
          {searchedProducts.length ? (
            <ProductsList products={searchedProducts} />
          ) : (
            <h2> Товары не найдены</h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeHook;
