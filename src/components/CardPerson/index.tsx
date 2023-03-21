import React, { FC } from 'react';
// import { Person } from 'models/person';
import cl from './CardPerson.module.scss';
import { FormPersonState } from 'components/FormPerson';

interface CardPerson {
  person: FormPersonState;
}

const CardPerson: FC<CardPerson> = ({ person }) => {
  return (
    <div className={cl.content}>
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
        <span> Data processing:</span> <span>{person.dataProcessing}</span>
      </div>
      <div>
        <span> Avatar:</span> <span>{person.file}</span>
      </div>
      <div>
        <span> Gender:</span> <span>{person.gender}</span>
      </div>
      <div className={cl.img}>
        <img src={person.img ? person.img : ''} alt="Image" />
      </div>
    </div>
  );
};

export default CardPerson;
