import { stringify } from 'query-string';
import Router from 'next/dist/next-server/server/router';

export function redirect(
  context,
  location,
  keepExistingQuery = false,
  statusCode = 307
) {
  const { pathname } = location;
  const query = keepExistingQuery
    ? { ...context.query, ...location.query }
    : location.query;
  const queryString = stringify(query);

  if (context.res) {
    // server
    context.res.writeHead(statusCode, {
      Location: queryString ? `${pathname}?${queryString}` : pathname
    });
    context.res.end();
  } else {
    Router.replace({
      pathname,
      query
    });
  }
}