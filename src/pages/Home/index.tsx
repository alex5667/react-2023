import ProductsList from 'components/ProductsList';
import React, { FC, useState } from 'react';
import './Home.scss';
import products from 'db/products';
import { Product } from '../../models/product';
import SearchHookBar from 'components/SearchBar';
import SortSelect from 'components/UI/select';

const HomeHook: FC = () => {
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  return (
    <section className="main__section">
      <div className="main__container">
        <div className="main__content">
          <div className="content__filter">
            <SortSelect
              defaultValue="sort by"
              options={[
                { value: 'price', name: 'price' },
                { value: 'rating', name: 'rating' },
                { value: 'discount', name: 'discount' },
              ]}
            />
            <SearchHookBar products={products} getSearchedProducts={setSearchedProducts} />
          </div>
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
