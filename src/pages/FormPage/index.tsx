import React, { Component } from 'react';
import { Person } from 'models/person';
import FormPerson from 'components/FormPerson';
import './FormPage.scss';

interface FormPageState {
  personCards: Person[];
}

export class index extends Component<Record<string, unknown>, FormPageState> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = {
      personCards: [] as Person[],
    };
  }

  addCard(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="main__container">
        <div className="main__content">
          <FormPerson personCards={this.state.personCards} />
        </div>
      </div>
    );
  }
}

export default index;
