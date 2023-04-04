import React, { FC } from 'react';
import SortSelect from 'components/UI/select';
import SearchHookBar from 'components/SearchBar';
import { SORT_OPTIONS } from 'utils/consts';
import cl from './FilterProducts.module.scss';

interface Filter {
  sort: string;
  query: string;
}
interface FilterProducts {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const FilterProducts: FC<FilterProducts> = ({ filter, setFilter }) => {
  return (
    <div className={cl.filter}>
      <SortSelect
        defaultValue="sort by"
        value={filter.sort}
        onchange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
        options={SORT_OPTIONS}
      />
      <SearchHookBar
        value={filter.query}
        getSearchedQuery={(search) => setFilter({ ...filter, query: search })}
      />
    </div>
  );
};

export default FilterProducts;
