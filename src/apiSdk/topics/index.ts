import axios from 'axios';
import queryString from 'query-string';
import { TopicInterface, TopicGetQueryInterface } from 'interfaces/topic';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTopics = async (query?: TopicGetQueryInterface): Promise<PaginatedInterface<TopicInterface>> => {
  const response = await axios.get('/api/topics', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTopic = async (topic: TopicInterface) => {
  const response = await axios.post('/api/topics', topic);
  return response.data;
};

export const updateTopicById = async (id: string, topic: TopicInterface) => {
  const response = await axios.put(`/api/topics/${id}`, topic);
  return response.data;
};

export const getTopicById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/topics/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTopicById = async (id: string) => {
  const response = await axios.delete(`/api/topics/${id}`);
  return response.data;
};
