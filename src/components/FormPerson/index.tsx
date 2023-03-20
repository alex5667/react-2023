import React, { Component, RefObject, createRef, ChangeEvent, FormEvent } from 'react';
import { Person } from 'models/person';
import cl from './FormPerson.module.scss';
import FormButton from 'components/UI/button/FormButton';
import FormInput from 'components/UI/input/FormInput';

interface FormPersonProps {
  personCards: Person[];
}

export interface Errors {
  name?: string;
  surname?: string;
}
interface FormPersonState {
  buttonDisabled: boolean;
  name: string;
  surname: string;
  errors: Errors;
}

export class FormPerson extends Component<FormPersonProps, FormPersonState> {
  private nameInput: RefObject<HTMLInputElement>;
  private surNameInput: RefObject<HTMLInputElement>;

  constructor(props: FormPersonProps) {
    super(props);
    this.state = {
      buttonDisabled: false,
      name: '',
      surname: '',
      errors: {},
    };
    this.nameInput = createRef<HTMLInputElement>();
    this.surNameInput = createRef<HTMLInputElement>();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newValue = value;

    this.setState((state) => {
      return { ...state, [name]: newValue };
    });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      console.log('все ок');
    } else {
      this.setState({ errors });
    }
  };

  validate = () => {
    const { name, surname } = this.state;
    const errors: FormPersonState['errors'] = {};

    if (name.length < 2) {
      errors.name = 'The name field must contain more than 1 character';
    }
    if (surname.length < 2) {
      errors.surname = 'The surname field must contain more than 1 character';
    }

    return errors;
  };

  render() {
    return (
      <div className={cl.mainContent}>
        <form onSubmit={this.handleSubmit} className={cl.contentForm}>
          <FormInput
            ref={this.nameInput}
            type="text"
            placeholder="Enter you name"
            label="Please, enter you name"
            name="name"
            onChange={this.handleInputChange}
            error={this.state.errors.name}
          />
          <FormInput
            ref={this.surNameInput}
            type="text"
            placeholder="Enter you surname"
            label="Please, enter you surname"
            name="surname"
            onChange={this.handleInputChange}
            error={this.state.errors.surname}
          />
          <FormButton disable={this.state.buttonDisabled}> add</FormButton>
        </form>
      </div>
    );
  }
}

export default FormPerson;
