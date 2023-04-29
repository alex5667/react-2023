import React, { FC } from 'react';
import { FormValues } from 'components/FormPerson';
import { UseFormRegister, FieldError } from 'react-hook-form';
import cl from './FormInput.module.scss';

type InputProps = {
  label: string;
  type: string;
  placeholder?: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
};

const FormHookInput: FC<InputProps> = ({ label, type, placeholder, register, error }) => {
  return (
    <>
      <label className={type === 'checkbox' ? cl.labelCheck : cl.labelInput}>
        {label}
        <input
          {...register}
          type={type}
          placeholder={placeholder}
          className={type === 'checkbox' ? cl.inputCheck : cl.formInput}
        />
        {error ? (
          <div className={cl.error}>{error.message}</div>
        ) : (
          <div className={cl.noerror}></div>
        )}
      </label>
    </>
  );
};

export default FormHookInput;
