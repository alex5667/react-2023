import { FormValues } from 'components/FormPerson/FormPerson.interface';
export const HOME_ROUTE = '/';
export const ABOUT_ROUTE = '/about';
export const NOTFOUND_ROUTE = '*';
export const FORM_ROUTE = '/form';

export const DefaultFormValues: FormValues = {
  name: '',
  surname: '',
  date: '',
  country: '',
  dataProcessing: false,
  file: null,
  img: null,
  gender: '',
};

// export enum SortFilter {
//   DEFAULT = 'DEFAULT',
//   PRICE = 'PRICE',
//   RATING = 'RATING',
//   DISCOUNT = 'DISCOUNT',
// }
