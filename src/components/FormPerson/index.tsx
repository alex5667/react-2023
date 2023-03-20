import React, { Component, RefObject, createRef } from 'react';
import { Person } from 'models/person';
import cl from './FormPerson.module.scss';
import FormButton from 'components/UI/button/FormButton';
import TextInput from 'components/UI/input/TextInput';

interface FormPersonProps {
  personCards: Person[];
}
interface FormPersonState {
  buttomDisabled: boolean;
  name: string;
  surname: string;
}

export class FormPerson extends Component<FormPersonProps, FormPersonState> {
  private nameInput: RefObject<HTMLInputElement>;
  private surNameInput: RefObject<HTMLInputElement>;

  constructor(props: FormPersonProps) {
    super(props);
    this.state = {
      buttomDisabled: true,
      name: '',
      surname: '',
    };
    this.nameInput = createRef<HTMLInputElement>();
    this.surNameInput = createRef<HTMLInputElement>();
    this.addInput = this.addInput.bind(this);
  }

  addInput(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    this.setState((state) => {
      return { ...state, name: this.nameInput.current?.value ? this.nameInput.current?.value : '' };
    });
  }
  render() {
    return (
      <div className={cl.mainContent}>
        <form className={cl.contentForm}>
          <TextInput ref={this.nameInput} type="text" placeholder="Enter you name" />
          <TextInput ref={this.surNameInput} type="text" placeholder="Enter you surname" />
          <FormButton onClick={this.addInput}> add</FormButton>
        </form>
      </div>
    );
  }
}

export default FormPerson;
