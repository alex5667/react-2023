import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import FormHookPage from './index';

describe('FormHookPage', () => {
  test('renders FormPerson component without crashing', () => {
    render(
      <Provider store={store}>
        <FormHookPage />
      </Provider>
    );
    const formPersonComponent = screen.getByTestId('form-person');
    expect(formPersonComponent).toBeInTheDocument();
  });
});
