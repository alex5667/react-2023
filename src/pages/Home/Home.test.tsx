import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Index from './index';

describe('HomeHook', () => {
  it('search bar filters products correctly', async () => {
    render(<Index />);
    const searchInput = screen.getByPlaceholderText(/Search product/i);
    await waitFor(() => {
      userEvent.type(searchInput, 'sams');
      const productsList = screen.getByTestId('products-list');
      expect(productsList.children.length).toBe(2);
    });
  });
});
