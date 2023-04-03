import React from 'react';
import { render, screen } from '@testing-library/react';
import PersonCards from '.';

describe('PersonCards', () => {
  const mockPersonCards = [
    {
      name: 'John',
      surname: 'Doe',
      date: '2022-01-01',
      country: 'USA',
      dataProcessing: true,
      file: null,
      gender: 'male',
      img: 'http://example.com/avatar.jpg',
    },
  ];

  it('renders the correct number of cards', () => {
    render(<PersonCards personCards={mockPersonCards} />);
    const cards = screen.getAllByTestId('person-card');
    expect(cards.length).toEqual(mockPersonCards.length);
  });
});
