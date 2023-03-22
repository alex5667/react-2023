import React, { FC } from 'react';
import CardPerson from 'components/CardPerson';
import { FormPersonState } from 'components/FormPerson';
import cl from './PersonCards.module.scss';

interface PersonCards {
  personCards: FormPersonState[];
}

const PersonCards: FC<PersonCards> = ({ personCards }) => {
  return (
    <div className={cl.content}>
      {personCards &&
        personCards.map((person) => (
          <CardPerson key={person.surname + person.name} person={person} />
        ))}
    </div>
  );
};

export default PersonCards;
