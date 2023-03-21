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

  componentDidMount(): void {
    const local = localStorage.getItem('cards');
    const storage = local ? JSON.parse(local) : [];
    this.setState((state) => {
      return {
        ...state,
        personCards: [...state.personCards, ...storage],
      };
    });
  }

  addCard(card: FormPersonState) {
    this.setState(
      (state) => {
        return { ...state, personCards: [...state.personCards, card] };
      },
      () => localStorage.setItem('cards', JSON.stringify(this.state.personCards))
    );
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
