import formReducer, { addToCards } from './FormSlice';

describe('formSlice', () => {
  const initialState = {
    persons: [],
  };

  it('should handle adding a person to the form', () => {
    const person = {
      name: 'John',
      surname: 'Doe',
      date: '1991-01-01',
      country: 'USA',
      dataProcessing: true,
      file: null,
      img: null,
      gender: 'male',
    };
    const newState = formReducer(initialState, addToCards(person));
    expect(newState.persons.length).toEqual(1);
    expect(newState.persons[0]).toEqual(person);
  });
});
