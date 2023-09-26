import axios from 'axios';
import queryString from 'query-string';
import { QueryInterface, QueryGetQueryInterface } from 'interfaces/query';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getQueries = async (query?: QueryGetQueryInterface): Promise<PaginatedInterface<QueryInterface>> => {
  const response = await axios.get('/api/queries', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createQuery = async (query: QueryInterface) => {
  const response = await axios.post('/api/queries', query);
  return response.data;
};

export const updateQueryById = async (id: string, query: QueryInterface) => {
  const response = await axios.put(`/api/queries/${id}`, query);
  return response.data;
};

export const getQueryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/queries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteQueryById = async (id: string) => {
  const response = await axios.delete(`/api/queries/${id}`);
  return response.data;
};
