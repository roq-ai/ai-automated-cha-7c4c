import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createQueryTopic } from 'apiSdk/query-topics';
import { queryTopicValidationSchema } from 'validationSchema/query-topics';
import { QueryInterface } from 'interfaces/query';
import { TopicInterface } from 'interfaces/topic';
import { getQueries } from 'apiSdk/queries';
import { getTopics } from 'apiSdk/topics';
import { QueryTopicInterface } from 'interfaces/query-topic';

function QueryTopicCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: QueryTopicInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createQueryTopic(values);
      resetForm();
      router.push('/query-topics');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<QueryTopicInterface>({
    initialValues: {
      query_id: (router.query.query_id as string) ?? null,
      topic_id: (router.query.topic_id as string) ?? null,
    },
    validationSchema: queryTopicValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Query Topics',
              link: '/query-topics',
            },
            {
              label: 'Create Query Topic',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Query Topic
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <AsyncSelect<QueryInterface>
            formik={formik}
            name={'query_id'}
            label={'Select Query'}
            placeholder={'Select Query'}
            fetcher={getQueries}
            labelField={'content'}
          />
          <AsyncSelect<TopicInterface>
            formik={formik}
            name={'topic_id'}
            label={'Select Topic'}
            placeholder={'Select Topic'}
            fetcher={getTopics}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/query-topics')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'query_topic',
    operation: AccessOperationEnum.CREATE,
  }),
)(QueryTopicCreatePage);
