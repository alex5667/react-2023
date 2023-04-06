import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterProducts from './index';

describe('FilterProducts', () => {
  const filter = {
    sort: '',
    query: '',
  };
  const setFilter = jest.fn();

  beforeEach(() => {
    render(<FilterProducts filter={filter} setFilter={setFilter} />);
  });

  it('should update the filter sort value', () => {
    const select = screen.getByRole('combobox');
    userEvent.selectOptions(select, 'price');
    expect(setFilter).toHaveBeenCalledWith({
      sort: 'price',
      query: '',
    });
  });

  it('should update the filter query value', () => {
    const input = screen.getByRole('searchbox');
    const button = screen.getByRole('button');
    userEvent.type(input, 'test');
    userEvent.click(button);
    expect(setFilter).toHaveBeenCalledWith({
      sort: '',
      query: 'test',
    });
  });
});
