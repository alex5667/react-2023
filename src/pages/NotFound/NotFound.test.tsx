import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './index';

describe('NotFound component', () => {
  it('renders heading, error message and back to home button', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const heading = screen.getByText('Page Not Found');
    const errorMessage = screen.getByText('404');
    const backButton = screen.getByRole('link', { name: 'Back to Home' });

    expect(heading).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });
});
