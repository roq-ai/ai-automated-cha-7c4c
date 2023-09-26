import axios from 'axios';
import queryString from 'query-string';
import { QueryTopicInterface, QueryTopicGetQueryInterface } from 'interfaces/query-topic';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getQueryTopics = async (
  query?: QueryTopicGetQueryInterface,
): Promise<PaginatedInterface<QueryTopicInterface>> => {
  const response = await axios.get('/api/query-topics', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createQueryTopic = async (queryTopic: QueryTopicInterface) => {
  const response = await axios.post('/api/query-topics', queryTopic);
  return response.data;
};

export const updateQueryTopicById = async (id: string, queryTopic: QueryTopicInterface) => {
  const response = await axios.put(`/api/query-topics/${id}`, queryTopic);
  return response.data;
};

export const getQueryTopicById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/query-topics/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteQueryTopicById = async (id: string) => {
  const response = await axios.delete(`/api/query-topics/${id}`);
  return response.data;
};
