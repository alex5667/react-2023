import React, { FC, RefAttributes, RefObject, ChangeEvent } from 'react';
import cl from './FormSelect.module.scss';

interface SelectProps {
  label: string;
  name: string;
  error: string | undefined;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  ref: RefObject<HTMLSelectElement>;
}
const FormSelect: FC<Omit<SelectProps, 'ref'> & RefAttributes<HTMLSelectElement>> =
  React.forwardRef(({ label, error, onChange, name }, ref) => {
    return (
      <>
        <label className={cl.labelSelect}>
          {label}
          <select ref={ref} name={name} onChange={onChange}>
            <option value="">Choose a country</option>
            <option value="Wakanda ">Wakanda </option>
            <option value="Genovia ">Genovia </option>
            <option value="Zemunda ">Zemunda </option>
            <option value="Freedonia">Freedonia</option>
            <option value="Latveria ">Latveria </option>
          </select>
          {error && <span>{error}</span>}
        </label>
      </>
    );
  });

export default FormSelect;
