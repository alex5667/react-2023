import { render, screen } from '@testing-library/react';
import React from 'react';
import FormHookPerson from './FormHookPerson';

describe('FormHookPerson', () => {
  it('should render all form fields', () => {
    render(<FormHookPerson addCard={() => {}} />);
    const nameInput = screen.getByLabelText(/Name/);
    const surnameInput = screen.getByLabelText(/Surname/);
    const dateInput = screen.getByLabelText(/Date/);
    const countrySelect = screen.getByLabelText(/Choose your country/);
    const consentCheckbox = screen.getByLabelText(/Consent to data processing/);
    const avatarInput = screen.getByLabelText(/Avatar/);
    const genderRadios = screen.getAllByTestId('gender-input');

    expect(nameInput).toBeInTheDocument();
    expect(surnameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(countrySelect).toBeInTheDocument();
    expect(consentCheckbox).toBeInTheDocument();
    expect(avatarInput).toBeInTheDocument();
    expect(genderRadios).toHaveLength(2);
  });
});
