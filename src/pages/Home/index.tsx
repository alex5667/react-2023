import ProductsList from 'components/ProductsList';
import React, { FC, useState, useEffect } from 'react';
import './Home.scss';
import products from 'db/products';
import { Product } from '../../models/product';
import FilterProducts from 'components/FilterProducts/FilterProducts';
import { useSortedSearchedProducts } from 'hooks/useProducts';

const HomeHook: FC = () => {
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedSearchedProducts = useSortedSearchedProducts(
    products,
    filter.sort as keyof Product,
    filter.query
  );

  useEffect(() => {
    const search = localStorage.getItem('search') ? localStorage.getItem('search') : '';
    setFilter((filter) => {
      return { ...filter, query: search as string };
    });
  }, []);

  return (
    <section className="main__section">
      <div className="main__container">
        <div className="main__content">
          <FilterProducts filter={filter} setFilter={setFilter} />
          <ProductsList products={sortedSearchedProducts} />
        </div>
      </div>
    </section>
  );
};

export default HomeHook;
