import React, { FC, useEffect, useState } from 'react';
import SearchInput from 'components/UI/input/SearchInput';
import { Product } from '../../models/product';
import cl from './SearchBar.module.scss';
import { searchProducts } from 'utils/searchProducts';

interface SearchBarProps {
  products: Product[];
  getSearchedProducts: (search: Product[]) => void;
}
const SearchHookBar: FC<SearchBarProps> = ({ products, getSearchedProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([] as Product[]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement> | string): void => {
    const search = typeof e === 'string' ? e : e.target.value.toLowerCase();
    setSearchQuery(search);
  };

  const handleClick = () => {
    getSearchedProducts(searchedProducts);
  };

  useEffect(() => {
    const search = localStorage.getItem('search') ? localStorage.getItem('search') : '';
    setSearchQuery(search as string);
    if (search) {
      const searchedProducts = searchProducts(search);
      getSearchedProducts(searchedProducts);
    } else {
      getSearchedProducts(products);
    }
  }, [getSearchedProducts, products]);

  useEffect(() => {
    const searchedProducts = searchProducts(searchQuery);
    setSearchedProducts(searchedProducts);
    localStorage.setItem('search', searchQuery);
  }, [searchedProducts, products, searchQuery]);

  return (
    <div className={cl.searchFilter}>
      <SearchInput onChange={handleSearch} value={searchQuery} placeholder="Search product" />
      <button onClick={handleClick} className={cl.button}>
        Search
      </button>
    </div>
  );
};

export default SearchHookBar;
