import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormPerson } from '.';

describe('FormPerson', () => {
  const addCardMock = jest.fn();
  const personCards = [
    {
      submitDisabled: false,
      resetDisabled: false,
      name: 'John',
      surname: 'Doe',
      date: '01/01/2000',
      country: 'USA',
      dataProcessing: 'agree',
      file: 'document.pdf',
      img: null,
      gender: 'male',
      errors: {},
    },
  ];

  beforeEach(() => {
    render(<FormPerson personCards={personCards} addCard={addCardMock} />);
  });

  it('should disable the submit button when the form is empty', async () => {
    await waitFor(() => {
      const submitButton = screen.getByRole('button', { name: /Add card/i });
      expect(submitButton).toBeDisabled();
    });
  });

  it('should enable the submit button when the form is filled out correctly', async () => {
    const surnameInput = screen.getByLabelText(/surname/i);
    const dateInput = screen.getByLabelText(/date/i);
    await waitFor(() => {
      userEvent.type(surnameInput, 'Doe');
      userEvent.type(dateInput, '2022-01-01');
      const submitButton = screen.getByRole('button', { name: /Add card/i });
      expect(submitButton).not.toBeDisabled();
    });
  });
  it('renders form with inputs and buttons', async () => {
    await waitFor(() => {
      expect(screen.getByLabelText('Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Surname')).toBeInTheDocument();
      expect(screen.getByLabelText('Date')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Add card' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /Reset/i })).toBeInTheDocument();
    });
  });
});
