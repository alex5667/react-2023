import React from 'react';
import { render, waitFor } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders RouterProvider', async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => {
      const routerProvider = getByTestId('router-provider');
      expect(routerProvider).toBeInTheDocument();
    });
  });
});
