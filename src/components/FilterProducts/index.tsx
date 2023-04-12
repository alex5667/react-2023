import React, { FC } from 'react';
import SortSelect from 'components/UI/select';
import SearchHookBar from 'components/SearchBar';
import { SORT_OPTIONS } from 'utils/consts';
import cl from './FilterProducts.module.scss';
import { useAppSelector } from 'hooks/redux';
import { useActions } from 'hooks/useActions';

const FilterProducts: FC = () => {
  const { sort } = useAppSelector((state) => state.homeSlice);
  const { addSort } = useActions();
  return (
    <div className={cl.filter}>
      <SortSelect defaultValue="sort by" value={sort} options={SORT_OPTIONS} onchange={addSort} />
      <SearchHookBar />
    </div>
  );
};

export default FilterProducts;
