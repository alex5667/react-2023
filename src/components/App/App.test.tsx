import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App component', () => {
  it('renders without errors', () => {
    render(<App />);
  });

  it('contains a RouterProvider with the router object', () => {
    const { getByTestId } = render(<App />);
    const routerProvider = getByTestId('router-provider');
    expect(routerProvider).toBeInTheDocument();
  });
});
