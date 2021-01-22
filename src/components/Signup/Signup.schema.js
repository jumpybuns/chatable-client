import * as yup from 'yup';

export const signupSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Required value'),
  password: yup
    .string()
    .required('Required value')
    .min(8, 'Must have at least 8 characters')
    .matches(/.*[0-9].*/, 'Must contain at least one number'),
  name: yup
    .string()
    .typeError('Must contain characters only')
    .required('Required value'),
});
