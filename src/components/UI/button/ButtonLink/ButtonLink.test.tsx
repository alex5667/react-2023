import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ButtonLink from '.';
import { HOME_ROUTE } from 'utils/consts';

describe('ButtonLink', () => {
  it('should navigate to Home page', () => {
    render(
      <BrowserRouter>
        <ButtonLink to={HOME_ROUTE} />
      </BrowserRouter>
    );
    const homeLink = screen.getByTestId('button-link');
    userEvent.click(homeLink);
    expect(window.location.pathname).toBe(HOME_ROUTE);
  });
});
