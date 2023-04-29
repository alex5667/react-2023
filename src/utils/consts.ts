import { FormValues } from 'components/FormPerson';
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

export const SORT_OPTIONS = [
  { value: 'price', name: 'price' },
  { value: 'rating', name: 'rating' },
  { value: 'discount', name: 'discount' },
];
