import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonCards from '.';

describe('PersonCards', () => {
  const mockPersonCards = [
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
    {
      submitDisabled: false,
      resetDisabled: false,
      name: 'Jane',
      surname: 'Doe',
      date: '02/02/2000',
      country: 'Canada',
      dataProcessing: 'agree',
      file: 'document.pdf',
      img: null,
      gender: 'female',
      errors: {},
    },
  ];

  it('renders the correct number of cards', () => {
    render(<PersonCards personCards={mockPersonCards} />);
    const cards = screen.getAllByTestId('person-card');
    expect(cards.length).toEqual(mockPersonCards.length);
  });
});
