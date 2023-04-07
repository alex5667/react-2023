import React, { FC, useEffect, useState } from 'react';
import SearchInput from 'components/UI/input/SearchInput';
import cl from './SearchBar.module.scss';

interface SearchBarProps {
  value: string;
  getSearchedQuery: (search: string) => void;
}
const SearchHookBar: FC<SearchBarProps> = ({ value, getSearchedQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    setSearchQuery(value);
  }, [value]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(() => e.target.value.toLowerCase());
  };

  const handleClick = () => {
    getSearchedQuery(searchQuery);
    localStorage.setItem('search', searchQuery);
  };

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
