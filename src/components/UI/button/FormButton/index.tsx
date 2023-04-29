import React, { FC, FormEvent } from 'react';
import cl from './FormButton.module.scss';

interface ButtonFormProps {
  children: string;
  disable: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (event: FormEvent<HTMLFormElement>) => void;
}

const FormButton: FC<ButtonFormProps> = ({ children, disable, type }) => {
  return (
    <button className={disable ? cl.unDisabled : cl.formButton} type={type} disabled={disable}>
      {children}
    </button>
  );
};

export default FormButton;
