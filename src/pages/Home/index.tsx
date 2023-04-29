import ProductsList from 'components/ProductsList';
import React, { FC, useEffect, useRef } from 'react';
import './Home.scss';
import FilterProducts from 'components/FilterProducts';
import Loader from 'components/Loader';
import Pagination from 'components/Pagination/Pagination';
import { productsApi } from 'services/ProductsApi';
import { useAppSelector } from 'hooks/redux';
import { useActions } from 'hooks/useActions';
import { Product } from '../../models/product';
import { ProductResponse } from 'services/ProductsApi';

const HomeHook: FC = () => {
  const { query, sort, limit, page } = useAppSelector((state) => state.homeSlice);
  const { setProducts, setTotalCount, setTotalPages, setIsLoading, setError } = useActions();
  const fetchingRef = useRef<(data: ProductResponse | undefined) => void>();
  const { data, isLoading, error } = productsApi.useFetchAllProductsQuery({
    search: query,
    limit: limit,
    skip: (page - 1) * limit,
  });

  const handleFetch = (data: ProductResponse | undefined) => {
    if (data) {
      const fetchedProducts: Product[] = data.products;
      setProducts(fetchedProducts);
      setTotalCount(data.total);
      setTotalPages();
      setIsLoading(isLoading);
    }
    if (error) {
      if ('status' in error) {
        const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
        setError(errMsg);
      } else {
        setError(error.message);
      }
    }
  };
  fetchingRef.current = handleFetch;

  useEffect(() => {
    fetchingRef.current && fetchingRef.current(data);
  }, [query, limit, sort, data]);

  return (
    <section className="main__section">
      <div data-testid="products-list" className="main__container">
        <div className="main__content">
          <FilterProducts />
          {isLoading ? (
            <Loader />
          ) : error ? (
            <h2 className="error">{error.toString()}</h2>
          ) : (
            <ProductsList />
          )}
        </div>
      </div>
      <Pagination />
    </section>
  );
};

export default HomeHook;
