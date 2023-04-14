import React, { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cl from './FormPerson.module.scss';
import FormButton from 'components/UI/button/FormButton';
import { DefaultFormValues } from 'utils/consts';
import FormHookInput from 'components/UI/input/FormInput';
import FormHookSelect from 'components/UI/input/FormSelect';
import FormHookRadio from 'components/UI/input/FormRadio';
import { useActions } from 'hooks/useActions';
export interface FormValues {
  name: string;
  surname: string;
  date: string;
  country: string;
  dataProcessing: boolean;
  file: FileList | null;
  img: string | null;
  gender: string;
}
const FormHookPerson: FC = ({}) => {
  const { addToCards } = useActions();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setFocus,
  } = useForm<FormValues>({
    defaultValues: DefaultFormValues,
    mode: 'onChange',
  });

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  const onsubmit: SubmitHandler<FormValues> = (data) => {
    if (data.file) {
      data = { ...data, img: URL.createObjectURL(data.file[0]) };
    }
    addToCards(data);
    alert('Data saved in Storage!');
    reset();
  };
  return (
    <div className={cl.mainContent}>
      <form data-testid="form-person" onSubmit={handleSubmit(onsubmit)} className={cl.contentForm}>
        <FormHookInput
          label="Name"
          type="text"
          placeholder="Enter you name"
          register={register('name', {
            required: 'The name is required',
            minLength: {
              value: 2,
              message: 'The name must contain more than 2 letter',
            },
            pattern: {
              value: /^[A-ZА-Я][a-zA-ZА-Яа-я]*$/,
              message: 'The name must begin with a capital letter and contain only letters',
            },
          })}
          error={errors.name}
        />
        <FormHookInput
          label="Surname"
          type="text"
          placeholder="Enter you surname"
          register={register('surname', {
            required: 'The surname is required',
            minLength: {
              value: 2,
              message: 'The name must contain more than 2 letter',
            },
            pattern: {
              value: /^[A-ZА-Я][a-zA-ZА-Яа-я]*$/,
              message: 'The name must begin with a capital letter and contain only letters',
            },
          })}
          error={errors.surname}
        />
        <FormHookInput
          label="Date"
          type="date"
          register={register('date', {
            required: 'The date is required',
          })}
          error={errors.date}
        />
        <FormHookSelect
          label="Choose your country"
          register={register('country', {
            required: 'The country is required',
          })}
          error={errors.country}
        />
        <FormHookInput
          label="Consent to data processing"
          type="checkbox"
          register={register('dataProcessing', {
            required: 'The consent is required',
          })}
          error={errors.date}
        />
        <FormHookInput
          type="file"
          label="Avatar"
          register={register('file', {
            required: 'The file is required',
          })}
          error={errors.date}
        />
        <FormHookRadio
          type="radio"
          label=""
          register={register('gender', {
            required: 'The file is required',
          })}
          error={errors.date}
        />
        <div className={cl.formButtons}>
          <FormButton type="submit" disable={!isValid}>
            Add card
          </FormButton>
          <FormButton type="reset" disable={isValid}>
            Reset
          </FormButton>
        </div>
      </form>
    </div>
  );
};

export default FormHookPerson;
