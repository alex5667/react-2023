import React, { Component } from 'react';
import { FormValues } from 'components/FormPerson/FormPerson.interface';
import './FormPage.scss';
import PersonCards from 'components/PersonCards';
import FormHookPerson from 'components/FormPerson/FormHookPerson';

interface FormPageState {
  personCards: FormValues[] | [];
}

export class index extends Component<Record<string, unknown>, FormPageState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      personCards: [],
    };
    this.addCard = this.addCard.bind(this);
  }

  addCard(card: FormValues) {
    this.setState((state) => {
      return { ...state, personCards: [...state.personCards, card] };
    });
  }
  render() {
    return (
      <div className="main__container">
        <div className="main__content">
          <FormHookPerson addCard={this.addCard} />
          <PersonCards personCards={this.state.personCards} />
        </div>
      </div>
    );
  }
}

export default index;
