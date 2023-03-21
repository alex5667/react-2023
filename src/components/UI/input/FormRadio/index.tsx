import React, { FC, RefAttributes, RefObject, ChangeEvent } from 'react';
import cl from './FormRadio.module.scss';

interface CheckProps {
  label: string;
  name: string;
  error: string | undefined;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  ref: RefObject<HTMLInputElement>;
}

const FormRadio: FC<Omit<CheckProps, 'ref'> & RefAttributes<HTMLInputElement>> = React.forwardRef(
  ({ label, name, error, onChange, type }, ref) => {
    return (
      <>
        <label className={cl.labelRadio}>
          {label}
          <span> Male</span>
          <input
            ref={ref}
            name={name}
            value="male"
            type={type}
            className={cl.inputRadio}
            onChange={onChange}
          />
          <span>Female</span>

          <input
            ref={ref}
            name={name}
            value="female"
            type={type}
            className={cl.inputRadio}
            onChange={onChange}
          />
          {error ? <div className={cl.error}>{error}</div> : <div className={cl.noerror}></div>}
        </label>
      </>
    );
  }
);

export default FormRadio;
