import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup  
    .string()
    .email('Must be a valid email address')
    .required('Required value'),
  password: yup 
    .string()
    .min(8, 'Must have at least 8 characters')
    .matches(/.*[0-9].*/, 'Must contain at least one number')
    .required('Required value'),
});
