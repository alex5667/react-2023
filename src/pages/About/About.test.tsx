import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './index';

describe('About', () => {
  it(' render with the correct title', () => {
    render(<About />);
    expect(screen.getByText(/to our online/i)).toBeInTheDocument();
  });
});
