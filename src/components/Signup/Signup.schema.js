import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Required Value'),
  password: yup
    .string()
    .required('Required Value')
    .min(8, 'Must have at least 8 characters')
    .matches(/.*[0-9].*/, 'Must contain at least one numberå'),
  name: yup
    .string()
    .typeError('Must contain characters only')
    .required('Required Value'),
});
