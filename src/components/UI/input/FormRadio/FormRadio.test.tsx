import React from 'react';
import { render, screen } from '@testing-library/react';
import FormHookRadio from './index';

describe('FormHookRadio', () => {
  const label = 'Gender';
  const type = 'radio';
  const error = undefined;

  test('should render component', () => {
    render(<FormHookRadio label={label} type={type} error={error} />);

    const genderInputMale = screen.getByDisplayValue('male');
    const genderInputFemale = screen.getByDisplayValue('female');
    const genderLabel = screen.getByText(label);

    expect(genderInputMale).toBeInTheDocument();
    expect(genderInputMale).toHaveAttribute('type', type);
    expect(genderInputFemale).toBeInTheDocument();
    expect(genderInputFemale).toHaveAttribute('type', type);
    expect(genderLabel).toBeInTheDocument();
  });

  test('should render error message', () => {
    const errorMessage = 'Gender is required';

    render(
      <FormHookRadio
        label={label}
        type={type}
        error={{ message: errorMessage, type: 'required' }}
      />
    );

    const errorElement = screen.getByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
  });
});
