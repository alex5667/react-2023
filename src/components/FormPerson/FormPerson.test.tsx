import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import FormHookPerson from './index';
import { FormValues } from './FormPerson.interface';

const mockStore = configureStore<unknown, {}>([]);

describe('FormHookPerson', () => {
  let store: MockStoreEnhanced<unknown, {}>;
  beforeEach(() => {
    store = mockStore({
      persons: [] as FormValues[],
    });
  });

  test('кнопка disabled, если не все поля заполнены', async () => {
    render(
      <Provider store={store}>
        <FormHookPerson />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText('Enter you name');
    const surnameInput = screen.getByPlaceholderText('Enter you surname');
    const dateInput = screen.getByLabelText('Date');
    const countrySelect = screen.getByLabelText('Choose your country');
    const consentCheckbox = screen.getByLabelText('Consent to data processing');
    const addButton = screen.getByRole('button', { name: /add card/i });

    expect(addButton).toBeDisabled();

    await userEvent.type(nameInput, 'John');
    expect(addButton).toBeDisabled();

    await userEvent.type(surnameInput, 'Doe');
    expect(addButton).toBeDisabled();

    await userEvent.type(dateInput, '2023-04-12');
    expect(addButton).toBeDisabled();

    await userEvent.selectOptions(countrySelect, 'Wakanda ');
    expect(addButton).toBeDisabled();

    await userEvent.click(consentCheckbox);
    expect(addButton).toBeDisabled();
  });
});
