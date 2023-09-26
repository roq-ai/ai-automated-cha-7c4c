import * as yup from 'yup';

export const queryTopicValidationSchema = yup.object().shape({
  query_id: yup.string().nullable().required(),
  topic_id: yup.string().nullable().required(),
});
