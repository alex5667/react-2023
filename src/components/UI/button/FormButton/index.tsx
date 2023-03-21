import React, { FC } from 'react';
import cl from './FormButton.module.scss';

interface ButtonFormProps {
  children: string;
  disable: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
}

const FormButton: FC<ButtonFormProps> = ({ children, disable, type }) => {
  return (
    <button className={disable ? cl.unDisabled : cl.formButton} type={type} disabled={disable}>
      {children}
    </button>
  );
};

export default FormButton;
