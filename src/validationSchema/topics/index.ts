import * as yup from 'yup';

export const topicValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
});
