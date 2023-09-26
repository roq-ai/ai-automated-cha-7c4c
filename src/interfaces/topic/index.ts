import { QueryTopicInterface } from 'interfaces/query-topic';
import { GetQueryInterface } from 'interfaces';

export interface TopicInterface {
  id?: string;
  name: string;
  description?: string;
  created_at?: any;
  updated_at?: any;
  query_topic?: QueryTopicInterface[];

  _count?: {
    query_topic?: number;
  };
}

export interface TopicGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
}
