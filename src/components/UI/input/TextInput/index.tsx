import React, { FC, RefObject, RefAttributes } from 'react';
import cl from './TextInput.module.scss';

interface TextInput {
  type: string;
  placeholder: string;
  ref: RefObject<HTMLInputElement>;
}

const TextInput: FC<Omit<TextInput, 'ref'> & RefAttributes<HTMLInputElement>> = React.forwardRef(
  ({ placeholder, type }, ref) => {
    return (
      <>
        <label htmlFor={placeholder} className={cl.labelInput}></label>
        <input
          ref={ref}
          id={placeholder}
          type={type}
          placeholder={placeholder}
          className={cl.textInput}
        />
      </>
    );
  }
);

export default TextInput;
