import ProductsList from 'components/ProductsList';
import React, { FC, useState, useEffect, useRef } from 'react';
import './Home.scss';
import { Product } from '../../models/product';
import FilterProducts from 'components/FilterProducts';
import { useSortedSearchedProducts } from 'hooks/useProducts';
import ProductService from 'API/ProductsService';
import Loader from 'components/Loader';
import { useFetching } from 'hooks/useFetching';
import { getPageCount } from 'utils/pages';
import Pagination from 'components/Pagination/Pagination';
import { ProductResponse } from 'API/ProductsService';

const HomeHook: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(24);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const fetchingAllRef = useRef<() => Promise<void>>();
  const fetchingQueryRef = useRef<() => Promise<void>>();

  const handleResponseFetching = (
    response: ProductResponse | undefined,
    isLoading: boolean,
    error: string | undefined
  ) => {
    if (response) {
      const fetchedProducts: Product[] = response.products;
      setProducts(fetchedProducts);
      const totalCount = response.total;
      setTotalPages(getPageCount(totalCount, limit));
      setIsLoading(isLoading);
      setError(error);
    }
  };

  const {
    fetching: fetchingAll,
    isLoading: isLoadingAll,
    error: errorAll,
  } = useFetching(async () => {
    const response = await ProductService.getAll(limit, (page - 1) * limit, filter.query);
    handleResponseFetching(response, isLoadingAll, errorAll);
  });
  fetchingAllRef.current = fetchingAll;

  const {
    fetching: fetchingQuery,
    isLoading: isLoadingQuery,
    error: errorQuery,
  } = useFetching(async () => {
    const response = await ProductService.getByQuery(filter.query);
    handleResponseFetching(response, isLoadingQuery, errorQuery);
  });
  fetchingQueryRef.current = fetchingQuery;

  useEffect(() => {
    fetchingAllRef.current && fetchingAllRef.current();
    fetchingQueryRef.current && fetchingQueryRef.current();
  }, [filter.query, limit, page]);

  useEffect(() => {
    setLimit(24);
    const search = localStorage.getItem('search') ?? '';
    setFilter((filter) => {
      return { ...filter, query: search as string };
    });
  }, []);
  const sortedSearchedProducts = useSortedSearchedProducts(
    products,
    filter.sort as keyof Product,
    filter.query
  );

  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <section className="main__section">
      <div className="main__container">
        <div className="main__content">
          <FilterProducts filter={filter} setFilter={setFilter} />
          {isLoading ? (
            <Loader />
          ) : error ? (
            <h2 className="error">{error.toString()}</h2>
          ) : (
            <ProductsList products={sortedSearchedProducts} />
          )}
        </div>
      </div>
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </section>
  );
};

export default HomeHook;
