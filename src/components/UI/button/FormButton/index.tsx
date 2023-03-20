import React, { FC } from 'react';
import cl from './FormButton.module.scss';

interface ButtonFormProps {
  children: string;
  disable: boolean;
}

const FormButton: FC<ButtonFormProps> = ({ children, disable }) => {
  return (
    <button className={cl.formButton} type="submit" disabled={disable}>
      {children}
    </button>
  );
};

export default FormButton;
