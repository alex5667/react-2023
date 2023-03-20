import React, { FC, RefObject, RefAttributes, ChangeEvent } from 'react';
import cl from './FormInput.module.scss';

interface TextInput {
  type: string;
  placeholder: string;
  label: string;
  name: string;
  error: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  ref: RefObject<HTMLInputElement>;
}

const FormInput: FC<Omit<TextInput, 'ref'> & RefAttributes<HTMLInputElement>> = React.forwardRef(
  ({ placeholder, type, label, name, error, onChange }, ref) => {
    return (
      <>
        <label className={cl.labelInput}>
          {label}
          <input
            ref={ref}
            name={name}
            type={type}
            placeholder={placeholder}
            className={cl.textInput}
            onChange={onChange}
          />
          {error && <span>{error}</span>}
        </label>
      </>
    );
  }
);

export default FormInput;
