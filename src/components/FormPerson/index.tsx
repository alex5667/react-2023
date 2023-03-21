import React, { Component, RefObject, createRef, ChangeEvent, FormEvent } from 'react';
import { Person } from 'models/person';
import cl from './FormPerson.module.scss';
import FormButton from 'components/UI/button/FormButton';
import FormInput from 'components/UI/input/FormInput';
import FormSelect from 'components/UI/input/FormSelect';
import FormCheckBox from 'components/UI/input/FormCheckBox';
import FormRadio from 'components/UI/input/FormRadio';

interface FormPersonProps {
  personCards: Person[];
}

export interface Errors {
  name?: string;
  surname?: string;
  date?: string;
  country?: string;
  dataProcessing?: string;
  file?: string;
  gender?: string;
}
interface FormPersonState {
  submitDisabled: boolean;
  resetDisabled: boolean;
  name: string;
  surname: string;
  date: string;
  country: string;
  dataProcessing: string;
  file: string;
  gender: string;
  errors: Errors;
}

export class FormPerson extends Component<FormPersonProps, FormPersonState> {
  private nameInput: RefObject<HTMLInputElement>;
  private surNameInput: RefObject<HTMLInputElement>;
  private dateInput: RefObject<HTMLInputElement>;
  private selectInput: RefObject<HTMLSelectElement>;
  private checkBox: RefObject<HTMLInputElement>;
  private fileInput: RefObject<HTMLInputElement>;

  constructor(props: FormPersonProps) {
    super(props);
    this.state = {
      submitDisabled: true,
      resetDisabled: true,
      name: '',
      surname: '',
      date: '',
      country: '',
      dataProcessing: '',
      file: '',
      gender: '',
      errors: {},
    };
    this.nameInput = createRef<HTMLInputElement>();
    this.surNameInput = createRef<HTMLInputElement>();
    this.dateInput = createRef<HTMLInputElement>();
    this.selectInput = createRef<HTMLSelectElement>();
    this.checkBox = createRef<HTMLInputElement>();
    this.fileInput = createRef<HTMLInputElement>();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value, type } = event.target;
    const newValue = type === 'checkbox' ? 'Agree' : type === 'file' ? 'download' : value;
    this.setState(
      (state) => {
        return { ...state, [name]: newValue };
      },
      () => this.setValidByName(name)
    );

    this.setState((state) => {
      return { ...state, submitDisabled: false, resetDisabled: false };
    });
  };

  setValidByName(name: string): void {
    console.log(this.state);
    const error = this.validate();
    const isValid = error[name as keyof typeof error]!.length === 0;
    if (isValid) {
      this.setState((state) => {
        return {
          ...state,
          errors: { ...state.errors, [name]: '' },
        };
      });
    }
  }

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = this.validate();
    const isValidate = Object.keys(errors).every(
      (key) => errors[key as keyof typeof errors]!.length === 0
    );
    if (isValidate) {
      localStorage.setItem('card', JSON.stringify(this.state));
      console.log('все ок');
      this.setState((state) => {
        return { ...state, submitDisabled: true };
      });
      event.currentTarget.reset();
    } else {
      this.setState((state) => {
        return { ...state, errors: errors };
      });
    }
  };

  validate = () => {
    const { name, surname, date, country, dataProcessing, file, gender } = this.state;
    const errors: FormPersonState['errors'] = {};
    if (name.length < 2) {
      errors.name = 'The name must contain more than 1 letter';
    } else if (!/^[A-ZА-Я][a-zA-ZА-Яа-я]*$/.test(name)) {
      errors.name = 'The name must begin with a capital letter and contain only letters';
    } else {
      errors.name = '';
    }

    if (surname.length < 2) {
      errors.surname = 'The surname must contain more than 1 letter';
    } else if (!/^[A-ZА-Я][a-zA-ZА-Яа-я]*$/.test(surname)) {
      errors.surname = 'The surname must begin with a capital letter and contain only letters';
    } else {
      errors.surname = '';
    }

    if (!date) {
      errors.date = 'Enter the date';
    } else {
      errors.date = '';
    }
    if (!country) {
      errors.country = 'Choose your country';
    } else {
      errors.country = '';
    }
    if (!dataProcessing) {
      errors.dataProcessing = 'Agree to data processing';
    } else {
      errors.dataProcessing = '';
    }
    if (!file) {
      errors.file = 'Select a file';
    } else {
      errors.file = '';
    }
    if (!gender) {
      errors.gender = 'Choose your gender';
    } else {
      errors.gender = '';
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
            label="Name"
            name="name"
            onChange={this.handleInputChange}
            error={this.state.errors.name}
          />
          <FormInput
            ref={this.surNameInput}
            type="text"
            placeholder="Enter you surname"
            label="Surname"
            name="surname"
            onChange={this.handleInputChange}
            error={this.state.errors.surname}
          />
          <FormInput
            ref={this.dateInput}
            type="date"
            placeholder="Enter you birth date"
            label="Date"
            name="date"
            onChange={this.handleInputChange}
            error={this.state.errors.date}
          />
          <FormSelect
            ref={this.selectInput}
            label="Choose your country"
            name="country"
            onChange={this.handleInputChange}
            error={this.state.errors.country}
          />
          <FormCheckBox
            ref={this.checkBox}
            label="Consent to data processing"
            name="dataProcessing"
            type="checkbox"
            onChange={this.handleInputChange}
            error={this.state.errors.dataProcessing}
          />
          <FormInput
            ref={this.fileInput}
            type="file"
            placeholder="Select a file"
            label="Avatar"
            name="file"
            onChange={this.handleInputChange}
            error={this.state.errors.file}
          />
          <div>
            <FormRadio
              ref={this.checkBox}
              label=""
              type="radio"
              name="gender"
              onChange={this.handleInputChange}
              error={this.state.errors.gender}
            />
          </div>
          <div className={cl.formButtons}>
            <FormButton type="submit" disable={this.state.submitDisabled}>
              Add card
            </FormButton>
            <FormButton type="reset" disable={this.state.resetDisabled}>
              Reset
            </FormButton>
          </div>
        </form>
      </div>
    );
  }
}

export default FormPerson;
