import React from 'react';
import { render, screen } from '@testing-library/react';

import Index from '.';

describe('FormPage', () => {
  it('renders FormPerson component', () => {
    render(<Index />);
    const formElement = screen.getByTestId('form-person');
    expect(formElement).toBeInTheDocument();
  });
});
