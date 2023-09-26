const mapping: Record<string, string> = {
  customers: 'customer',
  queries: 'query',
  'query-topics': 'query_topic',
  responses: 'response',
  topics: 'topic',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
