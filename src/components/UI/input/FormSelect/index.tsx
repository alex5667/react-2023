import React, { FC } from 'react';
import cl from './FormSelect.module.scss';
import { FormValues } from 'components/FormPerson/FormPerson.interface';
import { UseFormRegister, FieldError } from 'react-hook-form';

type SelectProps = {
  label: string;
  type?: string;
  placeholder?: string;
  register: ReturnType<UseFormRegister<FormValues>>;
  error: FieldError | undefined;
};

const FormHookSelect: FC<SelectProps> = ({ label, register, error }) => {
  return (
    <>
      <label className={cl.labelSelect}>
        {label}
        <select {...register}>
          <option value="">Choose a country</option>
          <option value="Wakanda ">Wakanda </option>
          <option value="Genovia ">Genovia </option>
          <option value="Zemunda ">Zemunda </option>
          <option value="Freedonia">Freedonia</option>
          <option value="Latveria ">Latveria </option>
        </select>
        {error ? (
          <div className={cl.error}>{error.message}</div>
        ) : (
          <div className={cl.noerror}></div>
        )}
      </label>
    </>
  );
};

export default FormHookSelect;
