import { QueryInterface } from 'interfaces/query';
import { GetQueryInterface } from 'interfaces';

export interface ResponseInterface {
  id?: string;
  content: string;
  query_id: string;
  created_at?: any;
  updated_at?: any;

  query?: QueryInterface;
  _count?: {};
}

export interface ResponseGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  query_id?: string;
}
