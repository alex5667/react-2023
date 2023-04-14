import React, { FC } from 'react';
import cl from './FormRadio.module.scss';
import { FormValues } from 'components/FormPerson';
import { UseFormRegister, FieldError } from 'react-hook-form';

type RadioProps = {
  label: string;
  type: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
};

const FormHookRadio: FC<RadioProps> = ({ label, type, register, error }) => {
  return (
    <>
      <label className={cl.labelRadio}>
        {label}
        <span> Male</span>
        <input
          data-testid="gender-input"
          {...register}
          value="male"
          type={type}
          className={cl.inputRadio}
        />
        <span>Female</span>
        <input
          data-testid="gender-input"
          {...register}
          value="female"
          type={type}
          className={cl.inputRadio}
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

export default FormHookRadio;
