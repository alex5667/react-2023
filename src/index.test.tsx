import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './components/App/App';

describe('FilterProducts', () => {
  test('renders App component without crashing', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
      const appComponent = getByTestId('app-component');
      expect(appComponent).toBeInTheDocument();
    });
  });
});
