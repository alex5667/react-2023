import React, { FC } from 'react';
import cl from './CardPerson.module.scss';
// import { FormPersonState } from 'components/FormPerson';
import { FormValues } from 'components/FormPerson/FormPerson.interface';

interface CardPerson {
  person: FormValues;
}

const CardPerson: FC<CardPerson> = ({ person }) => {
  return (
    <article data-testid="person-card" className={cl.content}>
      <div>
        <span> Name:</span> <span>{person.name}</span>
      </div>
      <div>
        <span> Surname:</span> <span>{person.surname}</span>
      </div>
      <div>
        <span> Date:</span> <span>{person.date}</span>
      </div>
      <div>
        <span> Country:</span> <span>{person.country}</span>
      </div>
      <div>
        <span> Data processing:</span> <span>{person.dataProcessing && 'Agree'}</span>
      </div>
      <div>
        <span> Gender:</span> <span>{person.gender}</span>
      </div>
      <div className={cl.img}>
        <span> Avatar:</span>
        <img src={person.img ? person.img : ''} alt="Image" />
      </div>
    </article>
  );
};

export default CardPerson;
