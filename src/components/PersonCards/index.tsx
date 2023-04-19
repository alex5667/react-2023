import React, { FC } from 'react';
import CardPerson from 'components/CardPerson';
import cl from './PersonCards.module.scss';
import { FormValues } from 'components/FormPerson';

interface PersonCards {
  personCards: FormValues[];
}

const PersonCards: FC<PersonCards> = ({ personCards }) => {
  return (
    <div className={cl.content}>
      {personCards && personCards.map((person) => <CardPerson key={Date.now()} person={person} />)}
    </div>
  );
};

export default PersonCards;
