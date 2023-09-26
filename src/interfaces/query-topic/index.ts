import { QueryInterface } from 'interfaces/query';
import { TopicInterface } from 'interfaces/topic';
import { GetQueryInterface } from 'interfaces';

export interface QueryTopicInterface {
  id?: string;
  query_id: string;
  topic_id: string;
  created_at?: any;
  updated_at?: any;

  query?: QueryInterface;
  topic?: TopicInterface;
  _count?: {};
}

export interface QueryTopicGetQueryInterface extends GetQueryInterface {
  id?: string;
  query_id?: string;
  topic_id?: string;
}
