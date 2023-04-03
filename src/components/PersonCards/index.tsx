import React, { FC } from 'react';
import CardPerson from 'components/CardPerson';
// import { FormPersonState } from 'components/FormPerson';
import cl from './PersonCards.module.scss';
import { FormValues } from 'components/FormPerson/FormPerson.interface';

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
