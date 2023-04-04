import cl from './sortSelect.module.scss';

import React, { FC } from 'react';

interface Option {
  value: string;
  name: string;
}

interface SortSelect {
  options: Option[];
  defaultValue: string;
  value: string;
  onchange: (value: string) => void;
}

const SortSelect: FC<SortSelect> = ({ options, defaultValue, value, onchange }) => {
  return (
    <select value={value} onChange={(event) => onchange(event.target.value)}>
      <option value="">{defaultValue}</option>
      {options.map((option: Option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default SortSelect;
