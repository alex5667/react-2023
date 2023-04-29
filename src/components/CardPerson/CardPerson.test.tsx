import React from 'react';
import { render } from '@testing-library/react';
import CardPerson from './index';
import { FormValues } from 'components/FormPerson';

describe('CardPerson', () => {
  const person: FormValues = {
    name: 'John',
    surname: 'Doe',
    date: '2022-01-01',
    country: 'USA',
    dataProcessing: true,
    file: null,
    img: 'https://example.com/avatar.jpg',
    gender: 'male',
  };

  it('should render a person card with all fields', () => {
    const { getByText, getByAltText } = render(<CardPerson person={person} />);

    expect(getByText('Name:')).toBeInTheDocument();
    expect(getByText('John')).toBeInTheDocument();

    expect(getByText('Surname:')).toBeInTheDocument();
    expect(getByText('Doe')).toBeInTheDocument();

    expect(getByText('Date:')).toBeInTheDocument();
    expect(getByText('2022-01-01')).toBeInTheDocument();

    expect(getByText('Country:')).toBeInTheDocument();
    expect(getByText('USA')).toBeInTheDocument();

    expect(getByText('Data processing:')).toBeInTheDocument();
    expect(getByText('Agree')).toBeInTheDocument();

    expect(getByText('Gender:')).toBeInTheDocument();
    expect(getByText('male')).toBeInTheDocument();

    expect(getByAltText('Image')).toBeInTheDocument();
  });

  it('should render a person card with only required fields', () => {
    const personWithoutOptionalFields: FormValues = {
      name: 'Jane',
      surname: 'Doe',
      date: '2022-02-02',
      country: 'Canada',
      dataProcessing: false,
      file: null,
      img: null,
      gender: 'female',
    };
    const { getByText, queryByText, queryByAltText } = render(
      <CardPerson person={personWithoutOptionalFields} />
    );

    expect(getByText('Name:')).toBeInTheDocument();
    expect(getByText('Jane')).toBeInTheDocument();

    expect(getByText('Surname:')).toBeInTheDocument();
    expect(getByText('Doe')).toBeInTheDocument();

    expect(getByText('Date:')).toBeInTheDocument();
    expect(getByText('2022-02-02')).toBeInTheDocument();

    expect(getByText('Country:')).toBeInTheDocument();
    expect(getByText('Canada')).toBeInTheDocument();

    expect(getByText('Data processing:')).toBeInTheDocument();
    expect(queryByText('Agree')).toBeNull();

    expect(getByText('Gender:')).toBeInTheDocument();
    expect(getByText('female')).toBeInTheDocument();

    expect(queryByAltText('Image')).toHaveAttribute('src', '');
  });
});
