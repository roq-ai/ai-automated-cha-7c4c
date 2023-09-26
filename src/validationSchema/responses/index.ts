import * as yup from 'yup';

export const responseValidationSchema = yup.object().shape({
  content: yup.string().required(),
  query_id: yup.string().nullable().required(),
});
