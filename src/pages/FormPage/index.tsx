import React, { FC } from 'react';
import './FormPage.scss';
import PersonCards from 'components/PersonCards';
import FormHookPerson from 'components/FormPerson';
import { useAppSelector } from 'hooks/redux';

const FormHookPage: FC = () => {
  const { persons } = useAppSelector((state) => state.formSlice);

  return (
    <div className="main__container">
      <div className="main__content">
        <FormHookPerson />
        <PersonCards personCards={persons} />
      </div>
    </div>
  );
};

export default FormHookPage;
