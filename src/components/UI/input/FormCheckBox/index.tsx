import React, { FC, RefAttributes, RefObject, ChangeEvent } from 'react';
import cl from './FormCheckBox.module.scss';

interface CheckProps {
  label: string;
  name: string;
  error: string | undefined;
  type: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  ref?: RefObject<HTMLInputElement>;
}

const FormCheckBox: FC<Omit<CheckProps, 'ref'> & RefAttributes<HTMLInputElement>> =
  React.forwardRef(({ label, name, error, onChange, type }, ref) => {
    return (
      <>
        <label className={cl.labelCheck}>
          {label}
          <input ref={ref} name={name} type={type} className={cl.inputCheck} onChange={onChange} />
          {error ? <div className={cl.error}>{error}</div> : <div className={cl.noerror}></div>}
        </label>
      </>
    );
  });

export default FormCheckBox;
