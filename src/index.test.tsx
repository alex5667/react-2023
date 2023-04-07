import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './components/App/App';
describe('FilterProducts', () => {
  test('renders App component without crashing', async () => {
    const { getByTestId } = render(<App />);
    await waitFor(() => {
      const appComponent = getByTestId('app-component');
      expect(appComponent).toBeInTheDocument();
    });
  });
});
