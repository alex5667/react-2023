import React, { FC, useEffect, useState } from 'react';
import SearchInput from 'components/UI/input/SearchInput';
import { Product } from '../../models/product';

interface SearchBarProps {
  products: Product[];
  setSearchedProducts: (search: Product[]) => void;
}
const SearchHookBar: FC<SearchBarProps> = ({ products, setSearchedProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement> | string): void => {
    const search = typeof e === 'string' ? e : e.target.value.toLowerCase();
    setSearchQuery(search);
  };
  useEffect(() => {
    const search = localStorage.getItem('search') ? localStorage.getItem('search') : '';
    setSearchQuery(search as string);
  }, []);

  useEffect(() => {
    const filterProduct = products.filter((product) => {
      const title: string = product.title.toLowerCase();
      const brand: string = product.brand.toLowerCase();
      const description: string = product.description.toLowerCase();
      const category: string = product.category.toLowerCase();
      const isExist = (prop: string): boolean => prop.indexOf(searchQuery) > -1;
      return isExist(category) || isExist(brand) || isExist(description) || isExist(title);
    });
    setSearchedProducts(filterProduct);
    localStorage.setItem('search', searchQuery);
  }, [searchQuery, products, setSearchedProducts]);

  return (
    <div className="content__search-filter">
      <SearchInput onChange={handleSearch} value={searchQuery} placeholder="Search product" />
    </div>
  );
};

export default SearchHookBar;
