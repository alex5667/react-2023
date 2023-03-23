import React, { Component } from 'react';
import FormPerson from 'components/FormPerson';
import './FormPage.scss';
import PersonCards from 'components/PersonCards';
import { FormPersonState } from 'components/FormPerson';

interface FormPageState {
  personCards: FormPersonState[] | [];
}

export class index extends Component<Record<string, unknown>, FormPageState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      personCards: [],
    };
    this.addCard = this.addCard.bind(this);
  }

  addCard(card: FormPersonState) {
    this.setState((state) => {
      return { ...state, personCards: [...state.personCards, card] };
    });
  }
  render() {
    return (
      <div className="main__container">
        <div className="main__content">
          <FormPerson addCard={this.addCard} personCards={this.state.personCards} />
          <PersonCards personCards={this.state.personCards} />
        </div>
      </div>
    );
  }
}

export default index;
