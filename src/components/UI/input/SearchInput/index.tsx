import React, { FC, InputHTMLAttributes } from 'react';
import cl from './SearchInput.module.scss';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<SearchInputProps> = (props) => {
  return <input type="search" {...props} className={cl.searchInput} />;
};

export default SearchInput;
