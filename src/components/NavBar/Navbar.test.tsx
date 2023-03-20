import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NavBar from '.';
import { ABOUT_ROUTE, HOME_ROUTE } from 'utils/consts';

describe('NavBar', () => {
  it('should navigate to Home page', async () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    await waitFor(() => {
      const homeLink = screen.getByText(/Home/i);
      userEvent.click(homeLink);
      expect(window.location.pathname).toBe(HOME_ROUTE);
    });
  });

  it('should navigate to About us page', async () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    await waitFor(() => {
      const aboutLink = screen.getByText(/About us/i);
      userEvent.click(aboutLink);
      expect(window.location.pathname).toBe(ABOUT_ROUTE);
    });
  });
});
