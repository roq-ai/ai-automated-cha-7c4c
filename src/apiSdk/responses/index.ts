import axios from 'axios';
import queryString from 'query-string';
import { ResponseInterface, ResponseGetQueryInterface } from 'interfaces/response';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getResponses = async (
  query?: ResponseGetQueryInterface,
): Promise<PaginatedInterface<ResponseInterface>> => {
  const response = await axios.get('/api/responses', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createResponse = async (response: ResponseInterface) => {
  const response = await axios.post('/api/responses', response);
  return response.data;
};

export const updateResponseById = async (id: string, response: ResponseInterface) => {
  const response = await axios.put(`/api/responses/${id}`, response);
  return response.data;
};

export const getResponseById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/responses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteResponseById = async (id: string) => {
  const response = await axios.delete(`/api/responses/${id}`);
  return response.data;
};
