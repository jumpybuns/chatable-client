import * as yup from 'yup';

export const roomFormSchema = yup.object().shape({
  name: yup  
    .string()
    .required('Required value'),
  userId: yup 
    .string(),
});
