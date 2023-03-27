import React, { FC, useState } from 'react';
import { FormValues } from 'components/FormPerson/FormPerson.interface';
import './FormPage.scss';
import PersonCards from 'components/PersonCards';
import FormHookPerson from 'components/FormPerson';

const FormHookPage: FC = () => {
  const [personCards, setPersonCards] = useState<FormValues[]>([]);

  const addCard = (card: FormValues) => {
    setPersonCards((prev) => {
      return [...prev, card];
    });
  };
  return (
    <div className="main__container">
      <div className="main__content">
        <FormHookPerson addCard={addCard} />
        <PersonCards personCards={personCards} />
      </div>
    </div>
  );
};

export default FormHookPage;
