import { render, screen } from '@testing-library/react';
import React from 'react';
import CardPerson from '.';

describe('CardPerson', () => {
  const person = {
    name: 'John',
    surname: 'Doe',
    date: '2022-01-01',
    country: 'USA',
    dataProcessing: 'Agree',
    file: 'avatar.jpg',
    gender: 'male',
    img: 'http://example.com/avatar.jpg',
    processingData: true,
    submitDisabled: false,
    resetDisabled: false,
    errors: {},
  };

  it('renders the correct content', () => {
    render(<CardPerson person={person} />);
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('Date:')).toBeInTheDocument();
    expect(screen.getByText('2022-01-01')).toBeInTheDocument();
    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getByText('USA')).toBeInTheDocument();
    expect(screen.getByText('Data processing:')).toBeInTheDocument();
    expect(screen.getByText('Agree')).toBeInTheDocument();
    expect(screen.getByText('Avatar:')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
  });
});
