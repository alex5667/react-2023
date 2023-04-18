import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import FormHookPerson, { FormValues } from './index';

const mockStore = configureStore<unknown, unknown>([]);

describe('FormHookPerson', () => {
  let store: MockStoreEnhanced<unknown, unknown>;
  beforeEach(() => {
    store = mockStore({
      persons: [] as FormValues[],
    });
  });

  test('disabled button if not all fields are filled', async () => {
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

    await act(async () => {
      await userEvent.type(nameInput, 'John');
    });
    expect(addButton).toBeDisabled();

    await act(async () => {
      await userEvent.type(surnameInput, 'Doe');
    });
    expect(addButton).toBeDisabled();

    await act(async () => {
      await userEvent.type(dateInput, '2023-04-12');
    });
    expect(addButton).toBeDisabled();

    await act(async () => {
      await userEvent.selectOptions(countrySelect, 'Wakanda ');
    });
    expect(addButton).toBeDisabled();

    await act(async () => {
      await userEvent.click(consentCheckbox);
    });
    expect(addButton).toBeDisabled();
  });
  test('should submit the form with valid data', async () => {
    render(
      <Provider store={store}>
        <FormHookPerson />
      </Provider>
    );

    await act(async () => {
      const nameInput = screen.getByLabelText('Name');
      await userEvent.type(nameInput, 'John');

      const surnameInput = screen.getByLabelText('Surname');
      await userEvent.type(surnameInput, 'Doe');

      const dateInput = screen.getByLabelText('Date');
      await userEvent.type(dateInput, '2023-04-14');

      const countrySelect = screen.getByLabelText('Choose your country');
      await fireEvent.change(countrySelect, { target: { value: 'USA' } });

      const consentCheckbox = screen.getByLabelText('Consent to data processing');
      await userEvent.click(consentCheckbox);

      const fileInput = screen.getByLabelText('Avatar');
      const testFile = new File(['test'], 'test.png', { type: 'image/png' });
      await fireEvent.change(fileInput, { target: { files: [testFile] } });

      const addButton = screen.getByRole('button', { name: 'Add card' });
      await userEvent.click(addButton);
    });

    const addButton = screen.getByRole('button', { name: 'Add card' });
    expect(addButton).toBeDisabled();
  });
  test('an error is displayed if the name is incorrectly filled in', async () => {
    render(
      <Provider store={store}>
        <FormHookPerson />
      </Provider>
    );

    const surnameInput = screen.getByPlaceholderText('Enter you name');
    const addButton = screen.getByRole('button', { name: /add card/i });

    expect(addButton).toBeDisabled();

    await act(async () => {
      await userEvent.type(surnameInput, 'doe');
    });
    expect(addButton).toBeDisabled();

    const error = await screen.findByText(
      'The name must begin with a capital letter and contain only letters'
    );
    expect(error).toBeInTheDocument();
  });
  test('an error is displayed if the last name is filled out incorrectly', async () => {
    render(
      <Provider store={store}>
        <FormHookPerson />
      </Provider>
    );

    const surnameInput = screen.getByPlaceholderText('Enter you surname');
    const addButton = screen.getByRole('button', { name: /add card/i });

    expect(addButton).toBeDisabled();

    await act(async () => {
      await userEvent.type(surnameInput, 'doe');
    });
    expect(addButton).toBeDisabled();

    const error = await screen.findByText(
      'The name must begin with a capital letter and contain only letters'
    );
    expect(error).toBeInTheDocument();
  });
  test('an error is displayed if the date is not entered', async () => {
    render(
      <Provider store={store}>
        <FormHookPerson />
      </Provider>
    );

    const dateInput = screen.getByLabelText('Date');
    const addButton = screen.getByRole('button', { name: /add card/i });

    expect(addButton).toBeDisabled();

    await act(async () => {
      await userEvent.clear(dateInput);
    });
    expect(addButton).toBeDisabled();
    const error = await screen.getByLabelText('Date');
    expect(error).toBeInTheDocument();
  });
  it('resets form values to default values when Reset button is clicked', () => {
    render(
      <Provider store={store}>
        <FormHookPerson />
      </Provider>
    );
    const nameInput = screen.getByLabelText('Name') as HTMLInputElement;
    const surnameInput = screen.getByLabelText('Surname') as HTMLInputElement;
    const dateInput = screen.getByLabelText('Date') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
    fireEvent.change(dateInput, { target: { value: '2022-01-01' } });

    const resetButton = screen.getByRole('button', { name: 'Reset' });
    fireEvent.click(resetButton);

    expect(nameInput.value).toBe('');
    expect(surnameInput.value).toBe('');
    expect(dateInput.value).toBe('');
  });
  test('displays validation error when name field contains invalid value', async () => {
    render(
      <Provider store={store}>
        <FormHookPerson />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText('Enter you name');
    const addButton = screen.getByRole('button', { name: /add card/i });

    await act(async () => {
      await userEvent.type(nameInput, 'john');
      await userEvent.click(addButton);
    });

    expect(
      screen.getByText('The name must begin with a capital letter and contain only letters')
    ).toBeInTheDocument();
  });
  test('should reset form values when Reset button is clicked', async () => {
    render(
      <Provider store={store}>
        <FormHookPerson />
      </Provider>
    );

    const nameInput = screen.getByLabelText('Name') as HTMLInputElement;
    const surnameInput = screen.getByLabelText('Surname') as HTMLInputElement;
    const dateInput = screen.getByLabelText('Date') as HTMLInputElement;
    const countrySelect = screen.getByLabelText('Choose your country') as HTMLSelectElement;
    const consentCheckbox = screen.getByLabelText('Consent to data processing') as HTMLInputElement;
    const fileInput = screen.getByLabelText('Avatar') as HTMLInputElement;
    const resetButton = screen.getByRole('button', { name: 'Reset' });

    await act(async () => {
      await userEvent.type(nameInput, 'John');
      await userEvent.type(surnameInput, 'Doe');
      await userEvent.type(dateInput, '2023-04-14');
      await fireEvent.change(countrySelect, { target: { value: 'Wakanda' } });
      await userEvent.click(consentCheckbox);
      const testFile = new File(['test'], 'test.png', { type: 'image/png' });
      await fireEvent.change(fileInput, { target: { files: [testFile] } });
    });

    await act(async () => {
      await userEvent.click(resetButton);
    });

    expect(screen.queryByText('John')).not.toBeInTheDocument();
    expect(screen.queryByText('Doe')).not.toBeInTheDocument();
    expect(screen.queryByText('2023-04-14')).not.toBeInTheDocument();
    expect(screen.queryByText('USA')).not.toBeInTheDocument();
    expect(screen.queryByText('Yes')).not.toBeInTheDocument();
  });
  test('an error is displayed if the country is not selected', async () => {
    render(
      <Provider store={store}>
        <FormHookPerson />
      </Provider>
    );

    const countrySelect = screen.getByLabelText('Choose your country');
    const addButton = screen.getByRole('button', { name: /add card/i });

    expect(addButton).toBeDisabled();

    await act(async () => {
      await userEvent.selectOptions(countrySelect, '');
    });
    expect(addButton).toBeDisabled();

    const error = await screen.getByText('The country is required');
    expect(error).toBeInTheDocument();
  });
  test('an error is displayed if file is not selected', async () => {
    render(
      <Provider store={store}>
        <FormHookPerson />
      </Provider>
    );

    const fileInput = screen.getByLabelText('Avatar');
    const addButton = screen.getByRole('button', { name: /add card/i });

    expect(addButton).toBeDisabled();

    await act(async () => {
      await fireEvent.change(fileInput, { target: { files: [] } });
    });
    expect(addButton).toBeDisabled();

    const error = await screen.getByText('The file is required');
    expect(error).toBeInTheDocument();
  });
});
