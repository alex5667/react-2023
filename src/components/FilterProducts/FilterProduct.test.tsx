import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import FilterProducts from './index';
import { store } from '../../redux/store';

describe('FilterProducts', () => {
  it('renders the SortSelect component', () => {
    render(
      <Provider store={store}>
        <FilterProducts />
      </Provider>
    );

    expect(screen.getByTestId('sort-select')).toBeInTheDocument();
  });
});
