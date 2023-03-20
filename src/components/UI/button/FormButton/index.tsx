import React, { MouseEvent, FC } from 'react';
import cl from './FormButton.module.scss';

interface ButtonFormProps {
  children: string;

  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const FormButton: FC<ButtonFormProps> = (props) => {
  return (
    <button className={cl.formButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default FormButton;
