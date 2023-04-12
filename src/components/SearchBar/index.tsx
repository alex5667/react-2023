import React, { FC, useEffect, useState } from 'react';
import SearchInput from 'components/UI/input/SearchInput';
import cl from './SearchBar.module.scss';
import { useActions } from 'hooks/useActions';
import { useAppSelector } from 'hooks/redux';

const SearchHookBar: FC = ({}) => {
  const { addQuery } = useActions();
  const { query } = useAppSelector((state) => state.homeSlice);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    setSearchQuery(query);
  }, [query]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(() => e.target.value.toLowerCase());
  };

  const handleClick = () => {
    addQuery(searchQuery);
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
