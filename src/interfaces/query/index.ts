import { QueryTopicInterface } from 'interfaces/query-topic';
import { ResponseInterface } from 'interfaces/response';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface QueryInterface {
  id?: string;
  content: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  query_topic?: QueryTopicInterface[];
  response?: ResponseInterface[];
  user?: UserInterface;
  _count?: {
    query_topic?: number;
    response?: number;
  };
}

export interface QueryGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
}
